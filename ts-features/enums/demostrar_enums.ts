console.log("\n--- Demostrando Enums ---");
// Los Enums permiten definir un conjunto de constantes con nombre, mejorando la legibilidad.
enum Rol {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Lector = 'LECTOR',
}

const rol_usuario: Rol = Rol.Admin;
console.log(`-> El rol del usuario es: ${rol_usuario}`);

if (rol_usuario === Rol.Admin) {
  console.log("   (Acceso concedido: El usuario tiene permisos de administrador)");
}
