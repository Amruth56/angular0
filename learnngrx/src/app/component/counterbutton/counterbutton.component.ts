import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs'
import { decrement, increment, reset } from '../../shared/store/counter.action';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})

// let counter$ = 0
export class CounterbuttonComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{counter:number}>){
    this.counter$ = store.select('counter');
  }
  OnIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
