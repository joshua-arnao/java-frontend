import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { User, UserCard } from './user-card';
import { CommonModule } from '@angular/common';

@Component({
  // aqui importo los componentes
  imports: [NxWelcome, RouterModule, UserCard, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  mainUser: User | null = { name: "Miguel", email: "carlosz@gmail.com", avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" };
  // aqui almacenaria todos los usuarios
  users: User[] = [
    {
      name: "Miguel", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      name: "Alfredo", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      name: "Carlos", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
    {
      name: "Rodrigo", email: "carlosz@gmail.com",
      avatarUrl: "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
    },
  ];


  onUserDeleted(event: Event) {
    console.log("event", event);

    this.mainUser = null;
    console.log("usuario eliminado");
  }

}
