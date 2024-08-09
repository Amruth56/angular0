import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgTemplateOutlet, NgFor],
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

  users:Array<string> = ['john', 'sam', 'smith', 'raj']
}
