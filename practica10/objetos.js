class Humano{
    constructor(){
        
    }
    envejecer(){
        return "haciendose viejo"
    }
}

class Persona extends Humano{
    constructor(){
        super();
        this.edad=0;
        this.nombre="";
    }
    setEdad(nuevaEdad){
        this.edad=nuevaEdad
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    getEdad(){
        return this.edad;
    }
    getNombre(){
        return this.nombre;
    }
    saluda(){
        return "hola, me llamo "+this.nombre+" y tengo "+this.edad;
    }
}

//instanciar objeto
var persona1=new Persona();
console.log(persona1);
persona1.saluda();
persona1.setEdad(27);
persona1.setNombre("adhemar");
console.log(persona1);
console.log(persona1.envejecer());

var persona2=new Persona();
persona2.setNombre="Pepe";
persona2.getEdad();
persona2.setEdad("18");
persona2.envejecer();