// javascript permite esto
// voy a generar una variable que guarde informacion de un usuario
// let user = { name: "Juan", age: 30 }; // ya has declarado un OBJETO
// user = "Ahora soy un String" // valido para JS
// user.toUpperCase(); // convertir a MAYUSCULA

console.log("Escribiendo codigo Typescript de la forma correcta")

// si quiero guardar informacion de un usuario
// debo usar una interface
// la interfaz es ----> { name: string; age: number }
const user: { name: string; age: number } = {
  name: "Miguel",
  age: 30
}
console.log("age _> ", user.age);

// las funciones tambien
console.log(":: Funciones tambien deben ser tipadas");
// el retorno debe ser de la misma naturaleza
function calcularTotal(price: number, quantity: number): number {
  return price * quantity;
}

// parametros opcionales
// void significa que no debe retorna ningun valor
// string retorna su valor
// el signo de interrogacion indica de que el parametro es opcional
function createUser(nombre: string, edad?: number): string {
  // aqui la edad debe ser OPCIONAL
  //  el simbol || significa el operador OR
  // 1 && 1 = 1
  // 1 || 0 = 1
  // 0 || 1 = 1
  // 0 || 0 = 0
  return `nombre ${nombre} edad ${edad || "no especificada"}`;
}
console.log("createUser ->>", createUser("Miguel"));

calcularTotal(12, 12);
console.log(calcularTotal(18, 78))

console.log("tipado para arreglos y los diferentes tipos de tipado");

// tipado de arreglos
const names: string[] = ["Raul", "Alfredo", "Miguel"];

// aqui acepta string y tambien number
const stringWithNumber: (string | number | boolean)[] = ["Raul", "Alfredo", true, "Miguel", 37];
console.log(names)
console.log(stringWithNumber)

console.log("DECLARACION DE INTERFACES");

// aqui puedo declarar la interfaz
interface User {
  id: number;
  nombre: string;
  edad?: number; // edad es OPCIONAL
  active: boolean;
};

// aqui usaria mi interfaz
const userWithInterface: User = {
  id: 1,
  nombre: "Alfredo",
  active: true,
  edad: 18
}
console.log(userWithInterface);

console.log("Clases en TypeScript")
// en Angular casi todas las implementaciones son CLASES
// componente, servicio, modulo, pipe, guard(rutas), directiva

// Declarar una clase de nombre Producto

class Producto {
  // atributos / propiedades
  // metodos
  private id: number;
  public nombre: string;
  protected precio: number;

  // constructor
  constructor(id: number, nombre: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  // metodos
  public obtenerPrecio(): number {
    return this.precio * 1.18; // 18% IGV
  }
  private validar(): boolean {
    return this.precio > 0;
  }
}

// en angular se usan decoradores para indicar la funcionalidad de una clase
// un decorador inicia con @

// @NgModule @Service @Pipe @Directive @Component
class AppComponent {
}
