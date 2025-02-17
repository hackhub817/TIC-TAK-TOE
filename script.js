console.log("Welcome to Tic Tak Toe")

let music =new Audio("music.mp3")
let audioturn =new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let isgameover = false;

const changeTurn = ()=>{
    return turn==="X"?"0":"X"
}

const CheckWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.getElementsByTagName('img')[0].style.height="55vh"
            document.getElementsByTagName('img')[0].style.width="55vh"
        
        }
    })
}

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ==='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            CheckWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
       
    })
    turn="X"
    isgameover=false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.getElementsByTagName('img')[0].style.height="0"
    document.getElementsByTagName('img')[0].style.width="0"
    document.querySelector(".line").style.width = "0";
})