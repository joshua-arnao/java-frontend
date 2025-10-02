# GIT

## Comandos basicos

### agregar archivos nuevos

```sh
# status es el comando que te muestra los  archivos nuevos/modificados/borrados
git status

# ahora git add me ayuda a agregar estos archivos a mi repositorio
# puede ser un archivo, todos los archivos, un patrón, etc
git add {*}

# ejemplo, aqui agrego todos los archivos
git add .
```

## generar un paquete de cambios (commit)

```sh
# commit es el comando para generarme el paquete de cambios
# -m me indica que voy a agregar un mensaje
git commit -m "agregando cambios para soportar nodejs"
```

## Enviar estos archivos al repositorio remoto (github.com)

```sh
# comando push envia tus commits al repositorio remoto
git push
```
