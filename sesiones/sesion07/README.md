# Sesion 07

## Angular Ciclo de vida

Hay varios métodos para manipular el ciclo de vida de angular

- Estos métodos se pueden implementar en componentes
- su finalidad es incrementar las capacidades propias del componente para adaptarlo a los requerimientos del proyecto

### Métodos del ciclo de vida

- **ngOnInit**: sirve prinicipamente para iniciar, obtener, configurar datos en el componente.
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- **ngAfterViewInit**: sirve para agregar alguna lógica que se necesite ejecutar al FINAL del renderizado el componente
- ngAfterViewChecked
- **ngOnDestroy**: sirve principalmente para limpiar la memoria de variables, métodos, eventos, etc.. que puedan estar huerfanos

No todos se usan en gran medida.

```bash
ng generate application --help
ng generate application lifecycle
```

ahora me genero un componente para probar el lifecycle

```bash
ng generate component lifecycle --project lifecycle
```

## Interpolación

La interpolación de angular permite mostrar valores de variables y su sintaxis es `{{  }}` doble llave

- Dentro de la doble llave se escribe la expresión, ejem:
  - `3 + 21` --- number
  - "Carlos" ---- string
  - `321 > 190`  ---- boolean
  - `esUnNumero() && esPar()` --- boolean
  - `obtenerEdadActual()`  --- number

```typescript
@Component({})
class FirstComponent{
  nombre = "Anabel"
  cantidad = 3;
  precio = 39;
  usuarioValido = true;
  obtenerEdadActual(){
    return "35"
  }
}
```

```html
<!-- aqui mostraria el valor #Anabel -->
{{ nombre  }}
{{ 90 * 13  }}
{{ obtenerApellido() }}
el precio total x cantidad es ----- {{ cantidad * precio   }}

El usuario actual esta --- {{ usuarioValido ? "valido" : "no es valido"   }}

edad actual --- {{ obtenerEdadActual()  }}
```

## Property Binding

permite establecer un valor de una propiedad en un elemento HTML desde un componente padre a un hijo. Se utiliza la sintaxis `[atributo]="expresion"` en el HTML

### Ejemplo

Enlazaando un atributo src de una imagen

```html
<img [src]="getImagen()" alt="imagen"   />
<img [src]="imageUrl" alt="imagen"   />
<img [src]="'http://ruta-de-imagen.jgg'" alt="imagen"   />
```

```typescript
@Component({})
class ImageComponent{
  imageUrl = "http://ruta-de-imagen.jpg"
  getImagen(){
    return "http://ruta-de-imagen.jpg"
  }
}
```

Enlazar un boton deshabilitado

```html
<!-- puedo deshabilitar este boton usando Property Binding -->
<button disabled="disabled" >Enviar</button>
<!-- esta deshabilitado -->
<button [disabled]="true" >Enviar</button>
<!-- habilitado -->
<button [disabled]="false" >Enviar</button>
<!-- property binding -->
<button [disabled]="isButtonEnabled" >Enviar</button>
```

```typescript
@Component({})
class FormComponent{
  isButtonEnabled = true; // cuando cambie este atributo (boolean) cambiara tambien el estado del boton
}
```

### Ejercicios desafio

Elijan el ejercicio que desean practicar, 15 minutos, `8:30pm`

- Mostrar una clase css acorde a un boton (habilitar/deshabilitar)
- Mostrar un texto basado en un boton (Mostra / Ocultar)
- Mostrar una imagen basadose en el atributo del componente padre

## Pipes

Pipe -> Tuberia

Una tuberia permite enganchar un origen y llevarlo a un destino.
entonces en Angular un Pipe va a permitir `TRANFORMAR` datos a su destino.
Los pipes se construyen usando clases y viven en su archivo unico

Angular va a proveer diversos `pipes` para transformar datos

```typescript

    new Date() -----  Pipe(angular) ---------- '04/06/2025'

```

La forma de uso de un pipe en angular es usando el simbolo `|` y en la plantilla html

```html
<!-- si imprimo(interpolo) este valor  me va a mostrar un texto dificil de comprender -->
<p>Hoy es {{ hoy }}</p>
<!-- usando PIPES puedes transformarlo a una fecha legible -->
 <!-- dos puntos y el string es opcional, son parametros del pipe -->
<p>Hoy es {{ hoy | date  }} en un formato más amigable</p>
<!-- en formato corto -->
<p>Hoy es {{ hoy | date:'shortDate'  }} en un formato más amigable</p>
```

```typescript
@Component({})
class FechaComponent{
  hoy = new Date() // new Date se trae la fecha actual, es un objeto que contiene metodos,atributos
}
```

Lista de Pipes en Angular

- currency: transforma valores numeros a monetarios

```html
<p>Precio en Dolares: {{ precio | currency:'USD'  }}</p>
<p>Precio en Soles: {{ precio | currency:'PEN'  }}</p>
```

- percent: transforma valores numeros a porcentaje

```html
<p>Porcentaje de progreso: {{ progreso | percent   }}</p>
```

- number: transforma valores a numericos con un determinado numero de decimales

```html
<p>Decimal numerico: {{ valor | number:'1.1-2' }}</p>
```

```typescript

// en mi componente deberia tener declarado estos alores
valor = "38.46" // es un string y usando el pipe number se realizara la conversión
progreso = 23 // se transformara a 23%
precio = 1 // se mostrara 1 en dolares, 3.4 en soles  ----- $ 1 ---- PEN 3.4 ---
```

## Ejemplo: Mostrar datos asincronos en un componente

Imagina que tu aplicacion necesita mostrar un "mensaje" y este mensaje se obtiene diariamente de un servidor. Esta operacion NO es Instantanea, puede tardar varios segundos, durante este tiempo queremos mostrar un espacio de carga, deberiamos mostrar un mensaje y una vez que llegue el dato el mensaje de carga debe desaparecer y mostrar el mensaje real.

El desafio seria gestionar esta operación asincrona de manera limpia con Angular, caracteristicas de Angular a usar:

- Pipe
- Templates
- Interpolacion
- Data Binding
- Eventos
- Ciclo de vida
- **Servicios**
- Directivas

Entre los objetivos de este ejercicio tenemos

- Comprender cómo manejar datos asincronos (observable) en un componente
- Implementar una subscripcion en un componente
- Utilizar Pipes asincronos
- Optimizar las llamadas
- Combinar ngIf con Pipes para manejo de carga

---

El servicio se llamaria `DataService`

Este servicio tiene la finalidad de conectarse a un servidor externo y traerse la información de este de forma asincrona

```bash
ng generate service --project async-data
```
