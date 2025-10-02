# Sesion 02

## Instalacion de paquetes npm

Para Instalar paquetes npm se requiere un archivo package.json y tambien instalar los paquetes como tal.

```sh
# --verbose les da una informacion detallada de descarga e instalacion de los paquetes
# este comando instala los paquetes npm del repositorio
npm install --verbose
```

## Uso de NX

```sh
# este comando ejecuta el proyecto es6 usando nx
nx  run es6:serve:development
```

## npm

- si falla demasiado borrar: `node_modules` y si existe el archivo `package-lock.json` y volver a ejecutar `npm install --verbose`

- 1 copia del repositorio donde se traigan los cambios del profesor (aqui se traen los cambios del repositorio remoto)
- 2 otra copia para su trabajo individual, codificacion, pruebas
