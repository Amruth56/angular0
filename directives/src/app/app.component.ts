import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn: boolean = true;
  userName: string = 'john doe';
  loginCount: number = 0;

  userRole: string = 'Admin';

  countLogInAttempts() {
    this.loginCount++;
    if (this.loginCount > 3) {
    }
  }
}
