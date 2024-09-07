import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
})
export class PracticeComponent {
  @ViewChild('validate') validate!: ElementRef;
  click() {
    console.log('clicked');
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click'); 
    btnObservable$.subscribe((data) => {
    console.log(data)
  })
  }
  
}
