let bn2 = document.querySelector(".bn2")
let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")
let bn = document.querySelector(".bn")

function color_change(){
    if (bn.classList.contains("b1")){
        bn.classList.add("b2")
        bn.classList.remove("b1")
    }
    else if(bn.classList.contains("b2")){
        bn.classList.add("b3")
        bn.classList.remove("b2") 
    }
    else{
        bn.classList.add("b1")
        bn.classList.remove("b3")
    }
    
}