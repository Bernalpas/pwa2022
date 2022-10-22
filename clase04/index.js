/* 
//Elementos de Consola
console.log(`iniciamos los ejercicios en V`);
console.error(`Este es un mensaje de error`);
console.warn(`Cuidado, puede explotar la app`);
console.info(`Te informo lo siguiente ...`)

console.log(`=============================================`);

//POO
//Clase: modelo
//Objeto: una instancia de la clase

class Cliente{
    constructor(nombre, apellido, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    constructor(nombre, apellido, direccion, facebook, instagram){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.facebook = facebook;
        this.instagram = instagram;
    }

    saludar(){
        console.log(`Buenas noches, mi nombre es ${this.nombre} y me apellido es ${this.apellido} y vivo en ${this.direccion}`);
    }

    pagar(){
        console.log(`Mi deuda es: 2000 pesos y la pago ahora`);
    }
}

let unCliente = new Cliente('Mario', 'Pérez', 'Mi calle 123');
let otroCliente = new Cliente('')

unCliente.saludar();
unCliente.pagar();



class Empleado{
    constructor(nombre, apellido, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
}


let personaje = {
    nombre: 'Juan',
    direccion: 'Pérez'
}
 */
//module.exports = Cliente;


console.log(`=============================================`);

//Fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    .then(users =>{
        cargarDatos(users)
    })
    .catch((error) =>{
        console.log(`El error es ${error}`);
    })


function cargarDatos(usuarios) {
    for(const usuario of usuarios){
        let div = document.createElement('div');
        div.innerHTML = `<p>${usuario.name} - ${usuario.email}</p>`
        document.body.append(div)
    } 
}


//tareas: Probar el fetch con alguna api free





