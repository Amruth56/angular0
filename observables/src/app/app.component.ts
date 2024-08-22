import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'observables';

  myObservable = new Observable((observer)=> {
    console.log('Observable starts')
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
    observer.next("6")
  })

  ngOnInit(){
    this.myObservable.subscribe((val)=> {
      console.log(val)
    })
}
