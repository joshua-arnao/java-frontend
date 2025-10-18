# Sesion 08 - Angular Forms

Los formularios en Angular permiten **La Captura de datos** hasta el uso de información del lado del servidor y aplicando **data-binding**.

## Objetivos

- Comprender la importancia de los formularios en las aplicaciones web
- Diferencia entre formularios **template-driven** y **reactivos**.
- Aplicar validaciones y mostrar errores
- Sincronizar datos y componentes usando data-binding

## Qué es un formulario en angular?

Es una estructura que permite a los usuarios ingresar y enviar datos.

- **Template-driven**: Declarativo, calza muy buen para formularios simples y rapidos y se basa en uso de directivas `ngModel`
- **Reactivo**: Basado en un caso de uso, **programático**, y se basa en Clases (typescript) y usa FormGroup, FormControl y FormBuilder (más potente)

Ambos enfoques permiten capturar datos, aplicar validaciones y gestionar el estado del formulario..

## Por que son importantes los formularios

- Permite la interacción entre usuario y aplicación
- Es el principal medio para recopilar datos, por ejemplo: iniciar sesion, registrarse, buscar datos, filtrar, etc.

## Datan Binding

esta caracteristica permite sincronizar la plantilla(template) y el componente gracias a:

- Interpolación: `{{ variable }}`
- Property Binding: `[property]=variable`
- Event Binding: `(event)=funcion()`
- **Two-way Binding** `[(ngModel)]=variable` - **Sincroniza** el valor entre el **input y la variable** del componente en **ambos sentidos**.

para usar ngModel se debe agregar la dependencia, importar `FormModule` o agregarlo como provider.

## Diferencias entre template-driven y reactivos

| **Caracteristicas** | **Template-driven**   | **Reactivos**                     |
| ------------------- | --------------------- | --------------------------------- |
| Declaración         | En el template (HTML) | En el typescript (componente)     |
| Ideal para...       | Formularios simples   | Formularios complejos / dinamicos |
| Validaciones        | En el template        | en el código                      |
| Control de estado   | limitado              | Completo y programático           |
| Testing             | Mas dificil           | Más sencillo                      |
|                     |                       |                                   |

## Ejemplos de formularios usando ngModel

> Entrada de texto

```html
<!-- <input placeholder="escribe tu nombre"> -->
<input [(ngModel)]="nombre" placeholder="escribe tu nombre" />
<p>Hola, {{ nombre  }}</p>

<input [(ngModel)]="edad" placeholder="escribe tu edad" />
<p>Hola, {{ edad  }}</p>

<input type="checkbox" [(ngModel)]="suscrito" />
<p *ngIf="suscrito">Gracias por suscribirte</p>
```

```ts
// aqui estaria el componente
nombre = '';
edad = 20;
suscrito = false;
```
