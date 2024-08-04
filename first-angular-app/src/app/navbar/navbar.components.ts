import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', // Make sure this matches
  standalone: true,
  template: `<H1>Navbar component</H1>
    <p>this is a paragraph</p>
    <BUTTON>click me</BUTTON>`,
  styles: `h1{color:red;
              background:black} p{color:red; background:yellow}`, 
              
})
export class AppNavbar {}
