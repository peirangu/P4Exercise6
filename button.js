const description = document.getElementById("description");
const cast = document.getElementById("cast");
const trivia = document.getElementById("trivia");
const descriptionButton = document.getElementById("descriptionButton");
const castButton = document.getElementById("castButton");
const triviaButton = document.getElementById("triviaButton");

descriptionButton.addEventListener('click',()=>{
    description.classList.remove("d-none");
    cast.classList.add("d-none");
    trivia.classList.add("d-none");
});

castButton.addEventListener('click',()=>{
    description.classList.add("d-none");
    cast.classList.remove("d-none");
    trivia.classList.add("d-none");
});

triviaButton.addEventListener('click',()=>{
    description.classList.add("d-none");
    cast.classList.add("d-none");
    trivia.classList.remove("d-none");
});
