import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgTemplateOutlet, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // isLoggedIn: boolean = true;
  // userName: string = 'john doe';
  // loginCount: number = 0;

  // userRole: string = 'Admin';

  // countLogInAttempts() {
  //   this.loginCount++;
  //   if (this.loginCount > 3) {
  //   }
  // }

  users: Array<any> = ['john', 'sam', 'smith', 'raj', 1, 2];
  usersObj: Array<any> = [
    {
      id: 1,
      name: 'john',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'sam',
      email: 'sam@gmail.com',
    },
    {
      id: 3,
      name: 'smith',
      email: 'smith@gmail.com',
    },
    {
      id: 4,
      name: 'raj',
      email: 'raj@gmail.com',
    },
  ];

  addNewUser() {
    let user = {
      id: 5,
      name: 'user 1',
      email: 'user1@gmail.com',
    };
    this.usersObj.push(user);
  }

  // deleteUser(user: object) {
  //   let index = this.usersObj.indexOf(user);
  //   this.usersObj.splice(index, 1);
  // }

  deleteUser(index: number) {
    this.usersObj.splice(index, 1);
  } 
}
