import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
    // observables have 3 methods: next, complete, error

  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css',
})
export class RxjsLearningComponent implements OnInit {
  agents$: Observable<string> = new Observable();
  agentName: string = '';


  //OF OPERATOR
  students$: Observable<any[]> = of(['aaaa', 'wwww', 2, false]);
  studentNames$: Observable<string> = of('Rama');

  studentDetails = [ 
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  studentObj$: Observable<{name:string, id:number}[]> = of(this.studentDetails).pipe(
    map((details) => details.map((student) => ({name: student.name, id: student.id})))
  );  


  //FOR OPERATOR
  orders$:Observable<string> = from(['order1','order2','order3'])
  orderArr = ['fashion', 1, false];
  orders1$:Observable<any> = from(this.orderArr)
  orderName:string = ''


  constructor() {}
  ngOnInit(): void {
    //OBSERVABLES
    // this.agents = new Observable(function (observer) {
    //   try {
    //     observer.next('Ram');
    //     setInterval(() => {
    //       observer.next('Shyam');
    //     }, 6000);
    //     // observer.next('Shyam');
    //     setInterval(() => {
    //       observer.next('Rahul');
    //     }, 7000);
    //     // observer.next('Sita');
    //   } catch (e) {
    //     observer.error(e); 
    //   }
    // });
    // this.agents.subscribe((data) => {
    //   console.log(data);
    //   this.agentName = data;
    // });

    //OF OPERATOR
    // this.students$.subscribe((data) => {
    //   console.log('array', data);
    // });
    // this.studentNames$.subscribe((data) => {
    //   console.log('string', data);
    // });
    this.studentObj$.subscribe((data) => {
      console.log('obj', data);
    });


    //FOR OPERATOR
    this.orders$.subscribe(data => {

      setInterval(()=>{
        this.orderName = data;
      },5000)
      //hi
     
    })


    this.orders1$.subscribe(data => {
      console.log("this is my data", data)
    })


  }


}
