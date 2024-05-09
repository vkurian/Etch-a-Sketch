document.addEventListener("DOMContentLoaded", function(){



    let container= document.getElementById("container")
    
    
    let btn1= document.querySelector("#btn1");
    
    let btn2=document.querySelector("#btn2");
    let btn3 = document.querySelector("#btn3")
    let btn4= document.querySelector("#btn4")
    
    
    creategrid(16)
    
    btn3.addEventListener("click", function(){
        creategrid(getSize())
        creatediv.style.backgroundColor="white"
    })
    
    
    
    
    
    
    
    function creategrid(size){
    
    container.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows= `repeat(${size},1fr)`;
    
    
    
    let numdiv= size * size
    
    for(let i=0; i<numdiv; i++){
        const creatediv= document.createElement("div")
        creatediv.classList.add("creatediv")
        container.appendChild(creatediv)
        
    
        btn1.addEventListener("click", function(){
    
            creatediv.addEventListener("mouseover",function(){
                creatediv.style.backgroundColor="black"
        
            })
    
             
        })
    
    
        
    
        btn2.addEventListener("click", function(){
    
            creatediv.addEventListener("mouseover",function(){
                creatediv.style.backgroundColor="white"
        
            })
        })
    
            btn3.addEventListener("click", function(){
    
            creatediv.style.backgroundColor="white"
    
    
             
        })
    
        btn4.addEventListener("click", function(){
            
    
            creatediv.style.backgroundColor="white" 
    
            creatediv.addEventListener("mouseover",function(){
                creatediv.style.backgroundColor="white"
        
            })
            
        })
    }
    
    
    
    
        
    }
    
    function getSize(){
        let input=prompt("What is the grid size")
        let message= document.querySelector("#message")
    
        while (!/^[0-9]+$/.test(input)){
            
            message=alert("Please enter number between 0 and 100")
            break;
            
        }
    
        if (input=="" || input==0 || input==100 )  {
            message=alert("Please enter number between 0 and 100")
        }
    
        else if( input<0 || input>100){
            message=alert("Please provide number between 0 and 100")
        }
    
        else{
            return input
           
        }
    }
    
    
    
    
    
    }) 