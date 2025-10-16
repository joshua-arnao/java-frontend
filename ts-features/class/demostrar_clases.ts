console.log("\n--- Demostrando Clases en TypeScript ---");

class Producto {
  private id: number;
  public nombre: string;
  protected precio: number;

  constructor(id: number, nombre: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  public obtener_precio_con_igv(): number {
    if (this.validar_precio()) {
      return this.precio * 1.18; // 18% IGV
    }
    return 0;
  }

  private validar_precio(): boolean {
    return this.precio > 0;
  }
}

const mi_producto = new Producto(1, "Laptop Gamer", 3500);
console.log(`-> Producto instanciado: ${mi_producto.nombre}`);
console.log(`-> Precio con IGV: S/ ${mi_producto.obtener_precio_con_igv()}`);
