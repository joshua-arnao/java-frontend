# Sesion 01

## QUe es JavaScript?

- Es un lenguaje propio para escribir código en el lado del cliente
- Su implementación mas actual va de la mano con motores como: V8 de Chrome o Spider Monkey de Mozilla
- **ES6** -> ECMASCript 2015, es la 6ta versión de la especificación
- ES7
- ES8
- ES2020
- ...
- ES2025

Cada version le agrega o mejora algunas caracteristicas de JS

## Novedades en ECMAScript 6

## ES6 y las novedades

- Block scope: let, const, var

  El block-scope va a permitir generarnos alcances, declaraciones de variables dentro de una función o estructura de código, **AISLANDO** sus referencias del exterior

  ```js
  // aqui va el codigo javascript

  // como haria para escribir en la consola del nodejs(motor)

  // va aqui un string
  // console es un objeto
  // log es un metodo
  // se invoca al metodo
  // el parametro es un string (cadena)
  // se suele finalizar con un punto y coma
  // console.log("Hola Mundo");

  // presionar ctrl + shift + p, abre la paleta de comandos (windows)

  // una funcion realiza una tarea una vez que se ejecute y retorna un valor
  // parametros: un arreglo de numeros
  // que es un arreglo? / hashmap / list
  // ejemplo: [1,2,3,5,8]
  function suma(numeros) {
    // esta funcion sumara los numeros
    // declaro una variable y lo inicializo con cero
    let result = 0; // result SOLO vive en la funcion suma

    // aqui proceso el contenido
    // puedo iterar la lista/arreglo para obtener el resultado
    for (let i = 0; i < numeros.length; i++) {
      // el resultado se va a sumar con el numero de la iteracion
      // en la primera iteracion será 1
      // en la segunda 2
      result = result + numeros[i]
    }

    // aqui lo retorno
    return result;
  }
  console.log('imprimiendo el valor de result -->')
  try {
    console.log(result) // que pasara?? undefined? null? exception?
  } catch (e) {
    console.log('error fatal')
  }

  // aqui puedo invocar la funcion
  console.log("la suma([1, 2]) deberia ser 1 + 2 = 3");
  console.log(suma([1, 2])) // resultado seria [1,2]
  ```

  - **Let** sirve para declarar VARIABLES que van a mutar (cambiar en tiempo de ejecucion)
  - **Const** se usa para guardar valores que **NO CAMBIAN.**
  - **Var** ya no se deberia usar por que es antiguo y Let/Const ya cubren los escenarios más comunes

- Arrow Function

Es una forma más declarativa para manejar funciones, ofrece ENCAPSULAMIENTO del contexto y ofrece una sintaxis más limpia y legible.
Arrow function no deberia ser usado al 100% para reemplazar a las funciones, puede causar problemas en tiempo de ejecucion, fijense si dentro de la función se usa **this**.

```js
function sayHello(){
  return 'Hello Developer';
}
// en arrow function
const sayHello = () => 'Hello Developer';

// function que eleva los numeros al cuadrado
function toSquare(numbers){
  // map es un metodo de un arreglo/lista
  // para transformar los valores
  return numbers.map(number => number * number);
  // input: [2,4] // output: [4,16]
}
// en arrow function
const toSquare = (numbers) => numbers.map(number => number * number);
const numbersToSquare = toSquare([5,6,8]);
```

- Rest parameters

Son parametros de una funcion que se pueden AGRUPAR en un arreglo.

```js
// super que tenemos una funcion que suma muchos numeros
function sumaNums(a,b,c,d,e,f,g,h,i) {
  // para sumar entonces haria
  return a + b + c + d + e + f +g +h +i;
}
// en rest parameters podemos AGRUPAR estos parametros
function sumaNumsWithRest(a,b,...rest) {
  // rest va a contener TODOS los demas parametros
  let result =0
  result += a;
  result += b;
  // aqui itero la lista y lo sumo al resultado
  rest.forEach(number => result+= number);
  return result;
}
console.log(sumaNumsWithRest(1,2,7,8,9,53,2,2))
console.log(sumaNumsWithRest(1,2,7,8))
```

- Classes

Son en realidad azucar sintactico debido a que es una forma más estandar de instanciar funciones en JS
Contiene metodos, funciones y una pseudo metodos/atributos estaticos

```js
// clase Circle

class Circle{
  // atributos
  PI= 3.1416;

  constructor(radio) {
    this.radio = radio;
  }
  // metodos
  area(){
    return this.PI  * this.radio * this.radio;
  }
}
// instanciar
// se requiere pasar el radio al constructor
let circle1 = new Circle(10);
console.log(circle1.area()); // 314.16
```

- Templates
- Destructuring
- Spread operator
- Promise
