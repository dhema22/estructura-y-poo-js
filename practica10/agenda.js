var agenda="adhemar jeronimo";
console.log("la agenda es "+agenda);
agenda="juan";
console.log("la agenda es "+agenda);

//arrays
var agenda2 =[];
agenda2[0]="adhemar";
agenda2[1]="jeronimo";
agenda2[2]="juan";
console.log(agenda2);
console.table(agenda2);
agenda2.push("julia");
console.table(agenda2);
agenda2.pop();
console.table(agenda2);
agenda2.splice(0,1);
console.table(agenda2);

//arrays index alphanumeric
var agenda3=[];
agenda3['nombre']="adhemar";
agenda3['telefono']="679657851";
agenda3['email']="esto@prueba";
console.table(agenda3);

//multidim mix

var cerveza=[];
cerveza['artesanal']=[];
cerveza['artesanal']['compañia']="Dougals";
cerveza['artesanal']['tipo']="APA";
cerveza['artesanal']['grado']=7.0;

cerveza['No artesanal']=[];
cerveza['No artesanal']['compañia']="Estrella";
cerveza['No artesanal']['tipo']="pilsner";
cerveza['No artesanal']['grado']=4.5;

console.table(cerveza);

