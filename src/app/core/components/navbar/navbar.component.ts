import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng-lts/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'news', routerLink: ['/articulos', 'list'], icon: 'pi pi-fw pi-book'},
      {label: 'weather', routerLink: ['/weather'], icon: 'pi pi-fw pi-compass'},

      {label: 'Log Out', routerLink: ['/auth'], icon: 'pi pi-fw pi-user-minus'},
  ];
  
  }
}