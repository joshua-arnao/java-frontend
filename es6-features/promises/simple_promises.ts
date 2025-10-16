// estructura para implementar un promise
new Promise((resolve, reject) => {
  // resolve es un METODO que usaremos para retornar un valor cuando la promesa este OK
  // reject otro metodo para retornar cuando falle
  const exito = true;

  if (exito) {
    resolve('todo bien');
  } else {
    reject(new Error('algo salio mal'));
  }
});
