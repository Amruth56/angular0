import {
  Component,
  OnChanges,
  Input,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input() pUserName: string = '';
  counter: number = 0;

  constructor() {
    console.log('constructor method triggered');
    console.log(this.pUserName);
  }

  ngOnInit() {
    console.log('NgOnInit hook triggered');
    console.log(this.pUserName);
  }

  ngOnChanges() {
    console.log('onChanges triggered');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }
  incrementCounter() {
    this.counter++;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit triggered');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked triggered ');
  }
}
