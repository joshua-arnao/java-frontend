import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {

  // agregar un objeto que contenga informacion
  // del usuario
  user = {
    name: "Paul",
    age: 32
  }
}
