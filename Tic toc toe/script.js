let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winPatterns=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],   
];

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    //console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        box.classList.add("o");
        box.classList.remove("x");
        turnO=false;        
    }
    else{
        box.innerText="X";
        box.classList.add("x");
        box.classList.remove("o");
        turnO=true;      
    } 
    box.disabled=true;  

    checkWinner()
  })
});

const disabledBoxes=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}

const enabledBoxes=()=>{
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("x");
        box.classList.remove("o");
     }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulation, winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();
//enabledBoxes();
};
const checkWinner =()=>{
    for (let pattern of winPatterns){       
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1 !="" && posVal2!="" && posVal3!=""){
         if (posVal1===posVal2 && posVal2===posVal3){
            console.log("Winner Winner!",posVal1);
            showWinner(posVal1);
         }
        }
}
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);