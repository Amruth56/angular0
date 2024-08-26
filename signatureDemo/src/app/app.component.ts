import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignaturePadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signatureDemo';
}
