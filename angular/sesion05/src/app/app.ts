import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { User, UserCard } from './user-card';
import { CommonModule } from '@angular/common';
import { DataPresenter } from './data-presenter';

@Component({
  // aqui importo los componentes
  imports: [NxWelcome, RouterModule, UserCard, CommonModule, DataPresenter],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  loading = true;
  userData: { name: string; email: string } | null = null;

  // el ciclo de vida mas usado es el ngOnInit
  // se ejecuta al INICIO = INIT
  ngOnInit(): void {
    // simular una carga de 4 segundos al inicio de la aplicacion
    setTimeout(() => {
      this.userData = { name: "Miguel", email: "miguel@gmail.com" }
      this.loading = false;
    }, 4000)
  }

  mainUser: User | null = { name: "Miguel", email: "carlosz@gmail.com", avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" };
  // aqui almacenaria todos los usuarios
  users: User[] = [
    {
      id: 1,
      name: "Miguel", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      id: 2,
      name: "Alfredo", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      id: 3,
      name: "Carlos", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      id: 4,
      name: "Rodrigo", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
  ];

  selectedUserId: number | undefined | null = 0;

  onUserDeleted(userId: number) {
    console.log("userId", userId);

    // this.mainUser = null;
    // aqui usare la logica para eliminar el usuario seleccionado

    // aqui usare un metodo que esta disponible en un arreglo
    // el metodo es `.filter` que hace es filtrar una lista basado en una condición
    // si la condicion es falsa se filtra sino se mantiene

    [true, false, false, true].filter(elemento => elemento === true);
    // entonces los que no cumplan se filtrarán, output: [true, true]

    // la condicional seria si el user.id de la iteración coincide con el ID enviado, entonces filtrarlo
    this.users = this.users.filter(user => user.id !== userId)
    console.log("usuario eliminado");
  }

  selectUser(user: User) {
    console.log('usuario seleccionado', user);
    // si hacemos click en el usuario hacer la logica para identificar al usuario seleccionado
    this.selectedUserId = this.selectedUserId === user.id ? null : user.id; // aqui guardo el ID del usaurio seleccionado
    console.log('usuario seleccionado con ID es -> ', this.selectedUserId)
  }

}
