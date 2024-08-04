import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.components';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'this loaded dynamically';
  imgUrl: string =
    'data:image/jpeg;base64,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';

  imgUrl2: string =
    'data:image/jpeg;base64,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';

  isDisabled: boolean = false;

  isActive:boolean = true;
}
