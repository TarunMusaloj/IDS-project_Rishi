let easy_btn=document.querySelector("#page2_easy");
let med_btn=document.querySelector("#page2_med");
let hard_btn=document.querySelector("#page2_hard");

let difficulty;
let category;
let sendDifficulty =(difficulty)=>{
    difficulty="easy";
    //here comes something to send we will learn today api and local storage
    //send category and difficulty
    window.location.href = "/page3/index3.html";
};

easy_btn.addEventListener("click",()=>{
    difficulty="easy";
    sendDifficulty(difficulty);
})

med_btn.addEventListener("click",()=>{
    difficulty="med";
    sendDifficulty(difficulty);
})

hard_btn.addEventListener("click",()=>{
    difficulty="hard";
    sendDifficulty(difficulty);
})
