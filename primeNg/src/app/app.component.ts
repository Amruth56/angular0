import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'User List',
        icon: 'pi pi-users',
        routerLink: ['/userList'],
      },
      {
        label: 'Add User',
        icon: 'pi pi-user-plus',
        routerLink: ['/newUser'],
      },
    ];
  }
}
