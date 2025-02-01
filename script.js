const input= document.querySelector("input");
const buttons = document.querySelectorAll(".input-btn")
const memoryStore = document.getElementById("memory-store");
const memoryRecall = document.getElementById("memory-recall")
const memoryClear = document.getElementById("memory-clear");
const equal= document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector(".backspace");

let currentInput = "";
let mememoy = "";

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value = button.getAttribute("data-value")
        console.log("Clicked")
        console.log(value);
        if(value){
            currentInput +=value;
            input.value=currentInput;
            console.log(input.value)
        }
        

    })
})

// handle equal button
equal.addEventListener("click",()=>{
    try{

        input.value = eval(input.value);
        currentInput = input.value;
    }
    catch(error){
        input.value = "error";
    }
    
})

// handle clear button
clear.addEventListener("click",()=>{
    input.value= "";
    currentInput = "";
})

// handle backscpace button
backspace.addEventListener("click",()=>{
    currentInput = currentInput.slice(0,-1);
    input.value= currentInput;
})

// handle memory store button
memoryStore.addEventListener("click",()=>{
    memory = input.value;
    input.value="";
    currentInput = "";

})

// handle memory recall button
memoryRecall.addEventListener("click",()=>{
    currentInput = currentInput+memory;
    input.value = currentInput;
})

// handle memory Clear 
memoryClear.addEventListener("click",()=>{
    memory="";
    
})

