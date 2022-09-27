//element.addEventListner("click", function, boolean);
const buttontwo=document.querySelector(".btn-2")

function alertBtn(){
    alert("I also love Javascript")
}
buttontwo.addEventListener("click", alertBtn);

//MouseOver

const newBackgroundColor=document.querySelector(".btn-3")

function changeBgColor(){
    newBackgroundColor.style.backgroundColor="yellow"
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)