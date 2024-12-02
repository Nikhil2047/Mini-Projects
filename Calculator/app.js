let string = "";

let buttons = document.querySelectorAll(".btn");

let display = document.querySelector(".input");




buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            display.value = string;
        }else if(e.target.innerHTML == "C"){
            let value = display.value;
            display.value = string;
            display.value = value.slice(0,-1);
            string = "";
        }else{
        string = string + e.target.innerHTML;
        display.value = string;
        }
        
    })
});

