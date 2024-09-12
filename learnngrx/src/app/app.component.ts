import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterbuttonComponent, CounterdisplayComponent, CustomcounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learnngrx';
}
