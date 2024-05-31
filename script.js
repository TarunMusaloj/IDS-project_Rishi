let searchbar=document.querySelector("#searchbar");
let body=document.querySelector("body");
let ok_btn=document.querySelector("#ok-btn");
console.log(ok_btn);
let category="NULL";
dropdown.addEventListener("change",()=>{
    category=document.querySelector("#dropdown").value;
    searchbar.value=category;
})

ok_btn.addEventListener("click",()=>{
    startquiz(category);
});

let startquiz=(category)=>{
    if(category==="NULL"){
        alert("select a category other than null");
    }
    else {
        window.location.href = "/page2/index2.html";
    }
}

//change category name for gk and space and astronomy while sendint ot other page

