window.onload = inicio;
function inicio(){
    document.getElementById('iniciar').addEventListener("click", empezar);
    document.getElementById('parar').addEventListener("click", parar);
    document.getElementById('reiniciar').addEventListener("click", reiniciar);
    h=0;
    m=0;
    s=0;
    document.getElementById('hms').innerHTML="00:00:00";
}


function empezar(){
    contar();
    tiempo = setInterval(contar, 1000);
    document.getElementById('iniciar').removeEventListener("click", empezar);
}
function contar(){
    var hTemp, mTemp, sTemp;
    s++;
    if (s>59){
        m++,s=0;
    }
    if (m>59){
        h++,m=0;
    }
    if (h>24){
        h=0;
    }

    if (s<10){
        sTemp ="0"+s;
    }else{
        sTemp=s;
    }
    if (m<10){
        mTemp ="0"+m;
    }else{
        mTemp=m;
    }
    if (h<10){
        hTemp ="0"+h;
    }else{
        hTemp=h;
    }

    document.getElementById('hms').innerHTML=hTemp+":"+mTemp+":"+sTemp;
}
function parar(){
    clearInterval(tiempo);
    document.getElementById('iniciar').addEventListener("click", empezar);
}
function reiniciar(){
    clearInterval(tiempo);
    inicio();
}