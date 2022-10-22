
import { Empleado } from './importar';
import { salario } from './importar';


console.log('Bienvenidos a TSC');

//1. Varibles
let nombre: string = 'Berni';
let persona: string | number = 25;
let ganar: boolean = false;

console.log(`${nombre} - ${persona} - ${ganar}`);

//2. Interface
interface cliente{
    nombre: string;
    edad: number;
    ciudad: string;
    provincia?: string; //optativo
    damedireccion(): void; //setear una acción
}

//Objetos de TS
const Persona: cliente = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'CABA',
    damedireccion: () => {
        console.log(`Mi dirección es ${Persona.ciudad}`);
    }
}

//Agrego info faltante
Persona.provincia = 'Córdoba';

console.table(Persona);
console.log(Persona.damedireccion());

// Arreglos y Arrays
let habilidades: string[] = ['Cocinar', 'Cantar'];
habilidades.push('Jugar');

for (let i = 0; i < habilidades.length; i++) {
    console.log(habilidades[i]);
}

//Funciones
function Sumar(a: number, b: number): number {
    return a * b;
}

const resultado = Sumar(1, 2);
console.log(`el resultado es ${resultado}`);

//Flecha
const flecha = (a: number, b: number) => {
    return a + b;
}

const resultadoflecha = flecha(1, 2);
console.log(`el resultado es ${resultadoflecha}`);

//Clases

const clima: string = 'cálido';


const Juan = new Empleado('Juan', 5);


Juan.imprimirNombre();
Juan.imprimirEdad();

console.log(Empleado.apodo);

console.log(Math.PI)

// Otra forma de crear una clase 
class Alumno{
    constructor(
        public nombre: string, 
        public edad: number
    ){}
}

const Lucas = new Alumno('Lucas', 20)



class Jefe extends Empleado{
    constructor(
        public nombre: string,
        public edad: number,
        private cargo: string,
    ){
        super(nombre, edad)
    }

    controlPresupuesto(){
        console.log(`Mi edad es ${this.edad}`);
        
    }
}

const Santi = new Jefe('Santi', 20, 'Administador');


console.log(Juan);
console.log(Lucas);
console.log(Santi);




















