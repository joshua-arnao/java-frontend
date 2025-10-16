console.log("\n--- Demostrando Async/Await con Promesas ---");

// Creamos una función que simula una llamada a una API y devuelve una Promesa.
const obtener_datos_usuario = async (id: number): Promise<{ id: number; nombre: string }> => {
  return new Promise((resolve) => {
    console.log(`   ...Buscando datos para el usuario con ID: ${id}...`);
    setTimeout(() => {
      resolve({ id: id, nombre: "Usuario de Ejemplo" });
    }, 1500); // Simula un retardo de red de 1.5 segundos
  });
};

async function async_awaits() {
  // 'await' pausa la ejecución de la función hasta que la Promesa se resuelva.

  const datos = await obtener_datos_usuario(101);

  console.log("-> ¡Datos recibidos exitosamente!");
  console.log(`   Nombre del usuario: ${datos.nombre} (ID: ${datos.id})`);

}
console.log("-> Iniciando la obtención de datos asíncrona...");
async_awaits();
