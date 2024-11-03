const red=document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");
const circle=document.getElementsByClassName("box5")[0];

red.addEventListener("mousedown",(e)=>{
    circle.style.backgroundColor="red";
});

yellow.addEventListener("mousedown",(e)=>{
circle.style.backgroundColor="yellow"
});
green.addEventListener("mousedown",(e)=>{
    circle.style.backgroundColor="green"
});