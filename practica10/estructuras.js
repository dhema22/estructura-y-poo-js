for(let dia=1;dia<=10;dia++){
    console.log("hoy es el día "+dia);
}

for(let dia=1;dia<=10;dia+=2){
    console.log("hoy es el día "+dia);    
}

for(let dia=10;dia>=1;dia--){
    console.log("hoy es el día "+dia);    
}

var dia=1;
while (dia<15){
    console.log(dia);
    dia++;
}

var dia=10
do{
    console.log("todo ok");
}while(dia>15);

//condicionales
var edad=26;
if(edad<30){
    console.log("joven");
}

if(edad>30){
    console.log("No tan joven");
}else{
    console.log("joven");
}

var diaSemana="lunes"
if(diaSemana="lunes"){
    console.log("mal dia");
}else if( diaSemana="martes"){
    console.log("No es tan malo");
}else{
    console.log("no falta nada para el finde");
}

switch(diaSemana){
    case "lunes":
        console.log("mal dia");
        break;
    case "martes":
        console.log("no es mal dia");
        break;
    case "miercoles":
        console.log("no es mal día");
        break;
    case "jueves":
        console-log("No queda nada ya");
        break;
    default:
        console.log("Son buenos días");
}