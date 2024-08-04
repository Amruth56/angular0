import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar],
  templateUrl: './app.component.html',
  styleUrls: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
 