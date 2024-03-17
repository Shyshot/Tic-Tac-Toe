let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");
let btn = document.querySelector("#slot");

let turn0 = true;

let count = 0;


const resetGame =()=>{
    EnbleBoxes();
    turn0=true;
    msgContainer.classList.add("hide");
}
const winPatterns = [
    [0,1,2],
    [1,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        console.log("Box was Clicked")
        box.disabled = true;
        count++;
        let isWinner = checkwinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
})
const gameDraw = ()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const EnbleBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congartulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkwinner = ()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("We have a Winner",pos1val);
                disableBoxes();
                showWinner(pos1val);

            }
    }
}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
