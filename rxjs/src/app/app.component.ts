import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { ObservableComponent } from './observable/observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeComponent, ObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs';
}
