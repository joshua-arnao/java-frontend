console.log("\n--- Demostrando Interfaces ---");

// Una interfaz es un contrato reutilizable para la forma de un objeto.
interface Usuario {
  id: number;
  nombre: string;
  edad?: number; // edad es OPCIONAL
  activo: boolean;
}

const usuario_con_interfaz: Usuario = {
  id: 1,
  nombre: "Alfredo",
  activo: true,
  edad: 18
};

console.log("-> Usuario que cumple con la Interfaz 'Usuario':", usuario_con_interfaz);
