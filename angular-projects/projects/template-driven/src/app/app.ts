import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  registro = { nombre: "", email: "", password: "" }
  formularioEnviado = "NO"
  mensaje_form = ""
  registrar() {
    this.formularioEnviado = "SI"
    this.mensaje_form = "Registro exitoso para" + this.registro.nombre + "!!"
  }










  // aqui almaceno los datos en forma de propiedades
  nombre_ejercicio01 = ""
  email_ejercicio01 = ""

  // agrego las propiedades
  nombre = "Alfredo"
  edad = 20

  suscrito = true;
  genero = "M"
  pais = ""

  contacto = { nombre: "", email: '', mensaje: '' }
}
