
export interface salario{
    nombre: string;
    monto: number;
}

export class Empleado{
    public nombre: string; //sólo tiene acceso en la clase|
    public edad: number; //acceso en todas partes 
    static apodo: string = 'Pepe'; //no depende el objeto, sino de la clase

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
        
    }

    imprimirEdad(){
        console.log(`Mi edad es ${this.edad}`);
        
    }

}