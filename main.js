
const game_setting_modal = document.getElementById("game_setting_modal");
const menu_modal = document.getElementById('menu_modal');
const game_finish_modal = document.getElementById('game_finish_modal');
const modal = document.getElementById('modal');

let key_row_1 = document.getElementById('key_row_1');
let key_row_2 = document.getElementById('key_row_2');
let key_row_3 = document.getElementById('key_row_3');
let input_tag = document.getElementById('input_tag');

let current_state = ''; //현재 state => setting_game, in_game, after_game
let target_word = ''; // game에 쓰일 단어

//init_game_seq에서 초기화 필요
let target_word_state; // 단어 내 맞은 글자 저장
let keyboard_input_state; // 이미 입력된 키는 제외하기 위한 배열
let remaining_try = 7; // 남은 시도 횟수
let try_num = 0;

let game_result = []; //게임 결과 저장하여 finish_modal, share에 사용

//const word_json = JSON.parse('parsed.json'); // 단어장
let word_json=[];



function in_game_key_event(input_char){ // Upper alphabet만 들어왔다고 가정
    console.log('in_game_key_event: ',input_char);

    //이미 입력한 글자는 제외 code add
    if(keyboard_input_state[input_char.charCodeAt(0)-65] === 1){
        return;
    }
    keyboard_input_state[input_char.charCodeAt(0)-65] = 1;

    let correct_idx = [];
    let key_correct_flag = false;
    let target_key = $('#key_'+input_char);

    try_num += 1;

    let try_result = [];
    if(game_result.length === 0){
        for(let i=0; i < target_word.length; i++) try_result.push('_');
    }else{
        try_result = game_result[game_result.length-1].slice();
    }


    for(let i=0; i<target_word.length; i++){
        if(input_char === target_word[i]){
            key_correct_flag = true;

            $('#input_tile_'+i).text(target_word[i]);

            target_key.css({
                'background-color':'rgb(108, 168, 104)',
                'color': 'white',
            });
        
            $('#input_tile_'+i).css({
                'border-width': '0px',
                'border-radius': '5px',
            });

            correct_idx.push(i);
            target_word_state[i] = 1;

            try_result[i] = target_word[i];
        }
    }

    game_result.push(try_result);
    
    if(!key_correct_flag){ // 틀리면
        remaining_try -= 1;

        target_key.css({
            'background-color':'rgb(232, 61, 88)',
            'color': 'white',
        });
    }

    console.log(correct_idx);

    for(let idx of correct_idx){
        let target_tile = $('#input_tile_'+idx)

        target_tile.css({
            'background-color':'rgb(108, 168, 104)'
        });
    }

    //game ending condition > all correct or remaining_try === 0
    console.log(target_word_state);
    console.log(keyboard_input_state);
    console.log(try_result);
    console.log(game_result);

    let game_end_flag = true;
    for(let char_state of target_word_state){
        if(char_state === 0){
            game_end_flag = false;
            break;
        }
    }

    if(remaining_try === 0){
        game_end_flag = true;
    }

    if(game_end_flag){
        setTimeout(game_over, 1000);
    }
    

}

function game_over(){

    console.log('game is over!')
    alert('game is over');

    let game_result_div = document.getElementById('game_result_div');
    game_result_div.innerHTML = '';

    for(let i=0; i < game_result.length; i++){
        let tmp_div = document.createElement('h4');
        
        for(let j=0; j < game_result[i].length; j++){
            tmp_div.innerText += game_result[i][j]+' ';
        }
        game_result_div.appendChild(tmp_div);
    }


    let tmp_div = document.createElement('h4');

    game_result[game_result.length-1];

    let success_flag = true;
    for(let i = 0 ; i < target_word.length; i++){
        if(game_result[game_result.length-1][i] === '_'){
            success_flag = false;
            break;
        }
    }
    
    if(success_flag){
        console.log('game success!');
        tmp_div.innerText = 'You win the game in '+try_num+' tries' ;

    }else{
        console.log('game failed...');
        tmp_div.innerText = 'You fail the game in '+try_num+' tries' ;
    }

    game_result_div.appendChild(tmp_div);

    let to_main_btn = document.getElementById('to_main_btn')
    to_main_btn.addEventListener('click', e => {
        console.log('in the main_btn')

        current_state = 'setting_game';

        for(let i =65; i <= 90; i++){
            let key_char = String.fromCharCode(i);

            //let tmp_key = document.getElementById('key_'+key_char);

            $('#key_'+key_char).css({
                'background-color': '#D3D6DA',
                'color':'black',
            });

        }

        load_game_setting_modal();
    });

    let result_share_btn = document.getElementById('result_share_btn');
    result_share_btn.addEventListener('click', e => {

        let to_share_text = '----Hang-Man----\n\n\n';
        let t = document.createElement('textarea');
        document.body.appendChild(t);


        for(let i=0; i < game_result.length; i++){
            
            for(let j=0; j < game_result[i].length; j++){
                to_share_text += game_result[i][j]+' ';
            }
            to_share_text += '\n\n';
        }

        to_share_text += window.location.href;

        console.log(to_share_text);

        t.value = to_share_text;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    });


    load_game_finish_modal();

}

function load_keyboard(){
    let keyboard_row_1 = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
    let keyboard_row_2 = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    let keyboard_row_3 = [90, 88, 67, 86, 66, 78, 77];
    //keyboard 배열 by ascii code

    //keyboard 첫번째 row 만들기
    for(let ascii_key of keyboard_row_1){
        let key_char = String.fromCharCode(ascii_key);

        let key_pad = document.createElement('button');


        key_pad.id = 'key_'+ key_char;
        key_pad.className = 'key_pad';
        key_pad.innerText =  key_char;

        key_pad.onclick = () => {
            console.log('key_pad onclick: ',key_char);
            in_game_key_event(key_char);
        }

        key_row_1.appendChild(key_pad);
    }

    //keyboard 두번째 row 만들기
    for(let ascii_key of keyboard_row_2){
        let key_char = String.fromCharCode(ascii_key);

        let key_pad = document.createElement('button');


        key_pad.id = 'key_'+ key_char;
        key_pad.className = 'key_pad';
        key_pad.innerText =  key_char;

        key_pad.onclick = () => {
            console.log('key_pad onclick: ',key_char);
            in_game_key_event(key_char);
        }

        key_row_2.appendChild(key_pad);
    }

    //keyboard 세번째 row 만들기
    for(let ascii_key of keyboard_row_3){
        let key_char = String.fromCharCode(ascii_key);

        let key_pad = document.createElement('button');


        key_pad.id = 'key_'+ key_char;
        key_pad.className = 'key_pad';
        key_pad.innerText =  key_char;

        key_pad.onclick = () => {
            console.log('key_pad onclick: ',key_char);
            in_game_key_event(key_char);
        }

        key_row_3.appendChild(key_pad);
    }
}

function init_game_seq(){
    //input_tag

    input_tag.innerHTML = '';
    for(let i = 0; i<target_word.length; i++){
        let input_tile = document.createElement('div');

        input_tile.id = 'input_tile_' + i;
        console.log(input_tile.id);

        input_tile.className = 'input_tile';
        //input_tile.innerText = target_word[i]; //게임중 innerText 드래그하면 보이는 문제
        input_tile.innerText = '.' // innerText 비워두면 input_tag 정렬이 틀어지는 문제가 있어서 default로 넣어둠

        input_tag.appendChild(input_tile);
    }

    target_word_state = [];
    for(let i=0; i<target_word.length; i++) target_word_state.push(0);

    keyboard_input_state = [];
    for(let i=0; i<26; i++) keyboard_input_state.push(0);

    remaining_try = 7; //남은 시도 횟수
    try_num = 0; //시도한 횟수
    game_result = []; //게임 과정 저장
    
}



window.onload = () => {

    // A ~ Z 65 ~ 90

    $.getJSON('./parsed.json', (data) => {
        $.each(data, (i, item) => {
            word_json.push(item);
        } )
    })

    load_keyboard(); // load keyboard

    load_game_setting_modal();
    //load_menu_modal();
    //load_game_finish_modal();

    // test line
    current_state = 'setting_game'; 
    //init_game_seq();

};

window.onkeydown = (e) => { // keyboard event, only alphabet, only active when in_game_state
    const evTarget = e.target
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }

    if(current_state === 'setting_game' && e.key === "Enter"){//enter event
        game_init_event(); 
    }

    if(current_state !== 'in_game') return;

    console.log(e.key.toUpperCase(), e.key.length);

    if(e.key.length > 1) return; //special token => shift, capslock, enter ....

    let input_char = e.key.toUpperCase();
    let input_ascii = input_char.charCodeAt(0);

    console.log(input_char, input_ascii);

    if( input_ascii < 65 || 90 < input_ascii ) return; // not alphabet exception

    in_game_key_event(input_char);

}


//이 아래 부분은 modal창 추가 부분
function load_game_setting_modal(){
    modalOn();
    document.getElementById('setting_target_word_input').focus();

    game_setting_modal.style.display = 'block';
    menu_modal.style.display         = "none";
    game_finish_modal.style.display  = "none";

}
function load_menu_modal(){
    modalOn();
    game_setting_modal.style.display = 'none';
    menu_modal.style.display         = "block";
    game_finish_modal.style.display  = "none";
}
function load_game_finish_modal(){
    modalOn();
    game_setting_modal.style.display = 'none';
    menu_modal.style.display         = "none";
    game_finish_modal.style.display  = "block";
}

//modal창 관련 함수
function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}

const btn_option_Easy = document.getElementById('btn_option_Easy');
btn_option_Easy.addEventListener('click', e => {
    game_init_event_level(0);
});
const btn_option_Medium = document.getElementById('btn_option_Medium');
btn_option_Medium.addEventListener('click', e => {
    game_init_event_level(1);
});
const btn_option_Hard = document.getElementById('btn_option_Hard');
btn_option_Hard.addEventListener('click', e => {
    game_init_event_level(2);
});

function game_init_event_level(level){
    const target_word_input = document.getElementById('setting_target_word_input');
    target_word_input.value = '';

    let idx_range = word_json[level].length;

    let target_idx = Math.floor(Math.random() * idx_range);

    target_word = word_json[level][target_idx].toUpperCase();
    console.log('Level '+level+' target word is ',target_word);

    modalOff();

    current_state = 'in_game';
    init_game_seq();
}

const btnModal = document.getElementById("btn_menu_modal")
btnModal.addEventListener("click", e => {
    modalOn();
    load_menu_modal();
})

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    console.log('close area');
    modalOff()
})

const btn_option_1 = document.getElementById('btn_option_1');
btn_option_1.addEventListener("click", e => {
    game_init_event();
});

function game_init_event(){
    const target_word_input = document.getElementById('setting_target_word_input');
    target_word = target_word_input.value.toUpperCase();

    if(target_word.length === 0) return;

    target_word_input.value = '';

    modalOff();

    current_state = 'in_game';
    init_game_seq();
}