import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreModule.forRoot({counter:counterReducer})],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnngrx';
}
