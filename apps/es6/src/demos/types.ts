export function example01() {
  // se da muy poco que usen: String, Boolean, Function, Date
  console.log("\n::CONVERSION DE TIPOS   \n");
  // - me sirve por ejemplo llega un valor numerico del backend en forma de STRING
  // - { data: user: { id: "1235", name: "Rafael", age: "16"  }  }

  // guardamos la rpta del backend
  const data = { data: { user: { id: "1235", name: "Rafael", age: "15" } } };
  // palabra reservada typeof me sirve para validar el tipo primitivo del dato
  console.log(typeof data.data.user.id); // {string}
  const id = Number(data.data.user.id); // aqui es la conversion de tipos
  console.log(typeof id) // aqui sale {number}

  // - String a numero (Number)
  // - Numero a String (String)
  // - Booleanos (Boolean)
  // - parseo de enteros y  flotantes (parseInt)
}

export default { example01 }
