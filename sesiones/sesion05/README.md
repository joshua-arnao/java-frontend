# Sesion 05

## Angular Components

Piensa que un **componente** es como una PIEZA DE LEGO.

Un Componente tiene

- Lógica (TypeScript) -> *.ts
- Plantillas (templates / HTML) -> *.html
- Estilos (CSS / SCSS) -> *.scss
- **Metadatos** (contenido extra para configurar a un componente) --> @Component

### Anatomía de un componente

```typescript
// importar los Decoradores de angular
// paquete npm tiene esta estructura:   @NOMBRE_DE_LA_ORG / NOMBRE_DEL_PAQUETE, ejemplo: @angular/core

import { Component } from '@angular/core'; // aqui viven implementaciones del NUCLEO de angular

// declarar la clase del componente
// le agrego Component por CONVENCIÓN
// PascalCase -> MiGranCurso
// CamelCase -> miGranCurso
// snakeCase -> mi_gran_curso

// dentro de este componente agrego metadata
@Component({
  // agregar los metadatos
  selector: 'app-user-card', // es la etiqueta HTML que se usará para invocar al componente
  // ejemplo en un archivo html: <app-user-card></app-user-card>
// crear los archivos relacionados
  templateUrl: './user-card.component.html', // ./ significa ruta relativa al archivo
  styleUrls: ['./user-card.component.scss'] // estilos
// probar
})
class UserCardComponent{
  // logica del componente
}
```

## Angular Modules

## Angular Standalone Component

Son componentes que no requieren un módulo para ser utilizados.
