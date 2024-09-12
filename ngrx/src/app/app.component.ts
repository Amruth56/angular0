import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ngrx';

  public userForm!: FormGroup;
  public usernameFormControl!:FormControl;
  public passwordForm!: FormControl;

  constructor(){

  }

  nOnInit(): void{

  }
}
