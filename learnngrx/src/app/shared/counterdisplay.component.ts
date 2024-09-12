import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit{
  counter$: Observable<number>;

  constructor(private store: Store<{counter:any}>){
    this.counter$ = store.select('counter');
  }

  counterdisplay!: any
  ngOnInit(): void {
      this.store.select('counter').subscribe(x => {
        this.counterdisplay= x.counter
      } )
  }
}
