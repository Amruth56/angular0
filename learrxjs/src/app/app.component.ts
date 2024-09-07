import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsLearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learrxjs';
}
