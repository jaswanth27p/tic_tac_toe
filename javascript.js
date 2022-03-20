var start=document.querySelector(".start")
var sq = document.querySelectorAll(".t")

start.addEventListener("click",st)
function st(){
    //var 
    var p1,p2;
    //reset
    for (let i = 0; i < sq.length; i++) {
        sq[i].textContent=" ";
        sq[i].style.backgroundColor="white"
        
    }
    document.querySelector("#r").style.display="none"
    p1=""
    p2=""
    //select marker
    var p1=prompt("hello player 1 ,select 'x' or 'o'")
    if (p1=="x" || p1=="X"){
        p1="x"
        p2="o"
    }else{
        p1="o"
        p2="x"
    }
    document.querySelector(".p1btn").innerHTML="Player 1 ("+p1+")"
    document.querySelector(".p2btn").innerHTML="Player 2 ("+p2+")"
    //
    var p1btn = document.querySelector(".p1btn")
    var p2btn = document.querySelector(".p2btn")
    function fun1(){
        this.textContent=p1
    }
    function fun2(){
        this.textContent=p2
    }
    function player1(){
        for (let i = 0; i < sq.length; i++) {
            sq[i].addEventListener("click",fun1)
            sq[i].addEventListener("click",won)
            
        }

    }
    function player2(){
        for (let i = 0; i < sq.length; i++) {
            sq[i].addEventListener("click",fun2)
            sq[i].addEventListener("click",won)
            
        }

    }
    
    p1btn.addEventListener("click",player1)
    p2btn.addEventListener("click",player2)
    







}


 













// testing winning



function won(){
    var p1,p2,p3,p4,p5,p6,p7,p8,p9;
    p1=document.querySelector("#one")
    p2=document.querySelector("#two")
    p3=document.querySelector("#three")
    p4=document.querySelector("#four")
    p5=document.querySelector("#five")
    p6=document.querySelector("#six")
    p7=document.querySelector("#seven")
    p8=document.querySelector("#eight")
    p9=document.querySelector("#nine")

    // checking palyer x
    if ( p1.textContent==="x" && p2.textContent==="x" && p3.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#two").style.backgroundColor="#7de68b"
        document.querySelector("#three").style.backgroundColor="#7de68b"
    }
    if ( p1.textContent==="x" && p4.textContent==="x" && p7.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#four").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
    }
    if ( p1.textContent==="x" && p5.textContent==="x" && p9.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p9.textContent==="x" && p6.textContent==="x" && p3.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#three").style.backgroundColor="#7de68b"
        document.querySelector("#six").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p9.textContent==="x" && p7.textContent==="x" && p8.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#eight").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p7.textContent==="x" && p5.textContent==="x" && p3.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#three").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
    }
    if ( p4.textContent==="x" && p6.textContent==="x" && p5.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#four").style.backgroundColor="#7de68b"
        document.querySelector("#six").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
    }
    if ( p2.textContent==="x" && p5.textContent==="x" && p8.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player X won"
        document.querySelector("#two").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#eight").style.backgroundColor="#7de68b"
    }

    // checking player o
    if ( p1.textContent==="o" && p2.textContent==="o" && p3.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#two").style.backgroundColor="#7de68b"
        document.querySelector("#three").style.backgroundColor="#7de68b"
    }
    if ( p1.textContent==="o" && p4.textContent==="o" && p7.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#four").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
    }
    if ( p1.textContent==="o" && p5.textContent==="o" && p9.textContent==="x"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#one").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p9.textContent==="o" && p6.textContent==="o" && p3.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#three").style.backgroundColor="#7de68b"
        document.querySelector("#six").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p9.textContent==="o" && p7.textContent==="o" && p8.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#eight").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
        document.querySelector("#nine").style.backgroundColor="#7de68b"
    }
    if ( p7.textContent==="o" && p5.textContent==="o" && p3.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#three").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#seven").style.backgroundColor="#7de68b"
    }
    if ( p4.textContent==="o" && p6.textContent==="o" && p5.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#four").style.backgroundColor="#7de68b"
        document.querySelector("#six").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
    }
    if ( p2.textContent==="o" && p5.textContent==="o" && p8.textContent==="o"){
        document.querySelector("#r").style.display="block"
        document.querySelector("#r").innerHTML="Player O won"
        document.querySelector("#two").style.backgroundColor="#7de68b"
        document.querySelector("#five").style.backgroundColor="#7de68b"
        document.querySelector("#eight").style.backgroundColor="#7de68b"
    }
}
