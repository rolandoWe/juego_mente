
let tarjetasDestapadas=0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimiento=0;
let acierto=0;
let temporizador=false;
let timer=60;
let tiempoRegresivoId=null;

let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(function(){
    return Math.random()-0.5
})
console.log(numeros)

// FUNCIONES
function agregarAnimacion(){
    document.querySelector(".vida").classList.add('vid')
}
function quitarAnimacion(){
    document.querySelector(".vida").classList.add('vi')
}

function contarTiempo(){
   tiempoRegresivoId= setInterval(function(){
        timer--;
        document.getElementById('t-restante').innerHTML=`Tiempo restante : ${timer} segundos`;

        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas()
        document.getElementById('t-restante').innerHTML=`Tu tiempo se ha acabado, vuelve a intentarlo!`;
        document.getElementById('t-restante').style.color="red";

        }
    
    },1000)
}

function bloquearTarjetas(){
    for(let i=0;i<=15;i++){
        let tarjetaBloqueada=document.getElementById(i);
        tarjetaBloqueada.innerHTML=numeros[i];
        tarjetaBloqueada.disabled=true
    }
}
// function principal
function destapar(id){
    agregarAnimacion()

    if(temporizador==false){
        contarTiempo();
        temporizador=true
    }

tarjetasDestapadas++

if(tarjetasDestapadas==1){
    tarjeta1=document.getElementById(id);
    primerResultado=numeros[id]
    tarjeta1.innerHTML=primerResultado;

    tarjeta1.disabled=true
}else if(tarjetasDestapadas==2){

    tarjeta2=document.getElementById(id);
    segundoResultado=numeros[id];
    tarjeta2.innerHTML=segundoResultado;

    tarjeta2.disabled=true;

    movimiento++;
    document.getElementById('movimientos').innerHTML='Movimientos: '+movimiento;

    if(primerResultado==segundoResultado){
      tarjeta1.style.background="rgb(205, 251, 205, 0.3)";
      tarjeta2.style.background="rgb(205, 251, 205, 0.3)";
       
        tarjetasDestapadas=0;

        acierto++;
    document.getElementById('aciertos').innerHTML='Acierto: '+acierto;

    if(acierto==8){
        clearInterval(tiempoRegresivoId)
    document.getElementById('aciertos').innerHTML=`<strong>Felicidades</strong> 👏👏 Haz logrado el objetivo.`;

        document.getElementById('t-restante').innerHTML=`Tiempo invertido ${60-timer} segundos`;
       document.querySelector('.vida').classList.remove('vid')
       document.querySelector('.barra').style.background="rgb(173, 255, 47)"
    }

    }else{
        setTimeout(function(){
            tarjeta1.innerHTML=" ";
            tarjeta2.innerHTML=" ";
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetasDestapadas=0
        },800)

    }
}
}

function restet(){
 window.location.reload()
}
document.querySelector('.reset').addEventListener("click",function(){
    restet()
})