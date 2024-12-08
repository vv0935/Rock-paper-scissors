let usc=document.querySelector("#ysc");
let csc=document.querySelector("#csc");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=0, comp=0;
choices.forEach(choice => {
    choice.addEventListener("click", ()=>{
        let pick=choice.id;
        console.log(pick);
        computerplay(pick);
    })
});
const gameplay = ()=>{
    let items=["rock", "paper", "scissors"];
    let i=Math.floor(Math.random() * items.length);
    let cpick=items[i];
    return cpick;
}
const computerplay=(pick)=>{
    let cpick;
    cpick=gameplay();
    console.log(cpick);
    if(pick===cpick){
        draw();
    }
    else{
        let userwin=true;
        if(pick==="rock"){
            userwin = cpick==="paper"?false:true;
        }
        if(pick==="paper"){
            userwin = cpick==="scissors"?false:true;
        }
        if(pick==="scissors"){
            userwin = cpick==="rock"?false:true;
        }
        if(userwin){
            user++;
            userwon(pick,cpick);
        }
        else{
            comp++;
            compwon(pick,cpick);
        }
    }
    usc.innerText=user;
    csc.innerText=comp;
}

const draw=()=>{
    console.log("The game is draw");
    msg.innerText=("The game is draw");
    msg.style.backgroundColor="black";
};
const  compwon=(pick,cpick)=>{
    console.log("Computer won");
    msg.innerText=(`Computer won! ${cpick} beats ${pick}`);
    msg.style.backgroundColor="red";
};
const  userwon=(pick,cpick)=>{
    console.log("user won");
    msg.innerText=(`user won! ${pick} beats ${cpick}`);
    msg.style.backgroundColor="green";
};