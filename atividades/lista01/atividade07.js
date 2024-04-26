const input = require("prompt-sync")();
const macas = Number(input("Maçãs compradas: "));

if( macas < 12 ){ 
    console.log("Valor total: " + (macas * 0.30));
} 

if (macas >= 12){
    console.log("Valor total: " + (macas * 0.25)); 
}