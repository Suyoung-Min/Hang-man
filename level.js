let easybtn = document.getElementById("easy-btn");
let mediumbtn = document.getElementById("medium-btn");
let hardbtn = document.getElementById("hard-btn");
let startbtn =document.getElementById("start-btn");

let level_description = document.getElementById("level_description");



window.onload = () => {
   
easybtn.addEventListener("click", e => {
    level_description_exp.innerText="A1~A2, Beginners level\nRecommended for basic users who can understand sentences and frequently used expressions related to areas of most intermediate areas, such as shopping, family, employment, etc.";
});
mediumbtn.addEventListener("click", e => {
    level_description_exp.innerText="B1~B2, Intermediate level\nRecommended for independent users who can understand the main ideas of a complex text on both concrete and abstract topics, including technical discussions in their field of specialization.";

});
hardbtn.addEventListener("click", e => {
    level_description_exp.innerText="C1~C2, Advanced level\nRecommended for proficient users who can understand a wide range of demanding, longer clauses, and recognize implicit meaning.";

});
startbtn.addEventListener("click", e => {
    location.href="index.html";
});

};