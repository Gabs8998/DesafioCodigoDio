let nomeHeroi = "Heroi Himmel"
let experiencia = 8467

if(experiencia <= 1000) {
    experiencia = "ferro"
}
else if(experiencia > 1000 && experiencia < 2000)
{
    experiencia = "bronze"
}

else if( experiencia > 2001 && experiencia <= 5000){
    experiencia = "prata"
}
else if(experiencia > 5001 && experiencia <= 7000){
    experiencia = "ouro"
}
else if(experiencia > 7001 && experiencia <= 8000){
    experiencia ="Platina"
}
else if(experiencia > 8001 && experiencia <= 9000){
    experiencia ="Ascendente"
}
else if(experiencia > 9001 && experiencia <= 10000){
    experiencia ="Imortal"
}
else{
    experiencia = "Radiante"
}


console.log("O heroi de nome " + nomeHeroi + " está no nível de " + experiencia)
