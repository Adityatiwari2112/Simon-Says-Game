let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup() {
  userseq = [];
  level++ ;
  h2.innerText =`Level ${level}`;



  let randinx=Math.floor(Math.random()*3);
  let randcolor= btns[randinx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);


 btnFlash(randbtn);
};

function CheckAns(idx){
    
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length == gameseq.length){
         setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerHTML =`Game over! Your score was <b>${level}</b> <br> press any key to start`;
        // document.querySelector("body").style.color = "black";
        // setTimeout(function(){
        //      document.querySelector("body").style.color = "white";

        // },150);
        reset()
    }

}

function btnPress(){
    console.log("btn press");
    let btn=this;
    btnFlash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    CheckAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}