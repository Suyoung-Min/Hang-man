

let key_row_1 = document.getElementById('key_row_1');
let key_row_2 = document.getElementById('key_row_2');
let key_row_3 = document.getElementById('key_row_3');
let input_tag = document.getElementById('input_tag');

let current_state = '';
let target_word = '';


//init_game_seq에서 초기화 필요
let target_word_state;
let keyboard_input_state;
let remaining_try = 7;

function in_game_key_event(input_char){ // Upper alphabet만 들어왔다고 가정
    console.log('in_game_key_event: ',input_char);

    //이미 입력한 글자는 제외 code add
    if(keyboard_input_state[input_char.charCodeAt(0)-65] === 1){
        return;
    }
    keyboard_input_state[input_char.charCodeAt(0)-65] = 1;

    remaining_try -= 1;

    let correct_idx = [];
    let key_correct_flag = false;
    let target_key = $('#key_'+input_char);

    for(let i=0; i<target_word.length; i++){
        if(input_char === target_word[i]){
            key_correct_flag = true;

            $('#input_tile_'+i).text(target_word[i]);

            target_key.css({
                'background-color':'rgb(108, 168, 104)',
                'color': 'white',
            });


            correct_idx.push(i);
            target_word_state[i] = 1;
        }
    }
    
    if(!key_correct_flag){
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
        console.log('game is over!')
        alert('game is over');
    }
    

}

function load_keyboard(){
    let keyboard_row_1 = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
    let keyboard_row_2 = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    let keyboard_row_3 = [90, 88, 67, 86, 66, 78, 77];   

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

        input_tag.appendChild(input_tile);
    }

    target_word_state = [];
    for(let i=0; i<target_word.length; i++) target_word_state.push(0);

    keyboard_input_state = [];
    for(let i=0; i<26; i++) keyboard_input_state.push(0);

    remaining_try = 7;
    
}

window.onload = () => {

    // A ~ Z 65 ~ 90

    load_keyboard(); // load keyboard

    // test line
    current_state = 'in_game'; 
    target_word = 'WORLDWORLD';
    init_game_seq();

};

window.onkeydown = (e) => { // keyboard event, only alphabet, only active when in_game_state

    if(current_state !== 'in_game') return;

    console.log(e.key.toUpperCase(), e.key.length);


    if(e.key.length > 1) return; //special token => shift, capslock, enter ....

    let input_char = e.key.toUpperCase();
    let input_ascii = input_char.charCodeAt(0);

    console.log(input_char, input_ascii);

    if( input_ascii < 65 || 90 < input_ascii ) return; // not alphabet exception

    in_game_key_event(input_char);

}