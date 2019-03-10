
console.log(`"Good mornig/afternon/night, it's xxx o'clock" \n`);

let hora = new Date().getHours();
let min = new Date().getMinutes();   
let greeting;

if (hora >= 7 &&  hora < 13){
  greeting = "Buenos dias";
}else if (hora >= 13 && hora < 22){
  greeting = "Buenas tardes";
}else {
  greeting = "Buenas noches";
}
console.log(`${greeting}, son las ${hora}, horas, y ${min} minutos\n`);

let pi = Math.PI.toFixed(6);
console.log(pi+"\n");

for ( i = 0; i < 23; i++) { 
let dec = i
let hex = i.toString(16);
let oct = i.toString(8);
let bin = i.toString(2); 
    console.log(`Dec = ` + i + ` Hex = ` + hex + ` Oct = ` + oct +` Bin = ` + bin );
};
console.log("");
for ( i = 0; i < 23; i++) {
if(i % 2){      
let dec = i;
let hex = i.toString(16); 
let oct = i.toString(8);
let bin = i.toString(2);
    console.log(`Dec = ` + i + ` Hex = ` + hex + ` Oct = ` + oct +  ` Bin = ` + bin);
}                                  
};

console.log("\nHi in Chinese is written as: " + "\u55e8\uff0c\u4f60\u597d\u5417"); 

console.log(' \n"The progam has finished" ');
