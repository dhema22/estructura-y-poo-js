
//declaración de la función
function saluda(){
    console.log("me llamo adhemar");
    console.log("tengo 26 años");
    console.log("mi correo es prueba@prueba.com");
}
//llamada funcion 
//si lo llamo varias veces se ejecuta tantas veces como se llame
saluda();

//funcion con parámetros
function saludar(nombre){
    console.log("me llamo "+nombre);
}
saludar("adhemar");
saludar("jeronimo");
saludar("jorge");

function infoGeneral(nombre, edad, email){
    console.log("me llamo "+nombre);
    console.log("tengo "+edad+" años");
    console.log("mi correo es "+email);
}
infoGeneral("jeronimo",35,"info@prueba.com");

function retornado(nombre, edad,email){
    cadena="";
    cadena+="me llamo "+nombre+"\n";
    cadena+="tengo "+edad+"\n";
    cadena+="mi email es"+email;
    return cadena;
}
console.log(retornado("juan",24,"prueba@retornado.com"));

