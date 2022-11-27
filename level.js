let easybtn = document.getElementById("easy-btn");
let mediumbtn = document.getElementById("medium-btn");
let hardbtn = document.getElementById("hard-btn");
let startbtn =document.getElementById("start-btn");

let level_description = document.getElementById("level_description");



window.onload = () => {
   
easybtn.addEventListener("click", e => {
    level_description.innerText="description for easy level";
});
mediumbtn.addEventListener("click", e => {
    level_description.innerText="description for medium level";

});
hardbtn.addEventListener("click", e => {
    level_description.innerText="description for hard level";

});
startbtn.addEventListener("click", e => {
    location.href="index.html";
});

};