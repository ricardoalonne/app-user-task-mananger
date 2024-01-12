import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SideBarItem } from './models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() drawer!: MatDrawer;
  items: SideBarItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        label: 'Home',
        iconName: 'home',
        routerLink: '/',
        exact: true,
      },
      {
        id: 2,
        label: 'Usuarios',
        iconName: 'person',
        routerLink: '/users',
        exact: false,
      },
      {
        id: 3,
        label: 'Prioridades',
        iconName: 'nearby_error',
        routerLink: '/priorities',
        exact: false,
      },
      {
        id: 4,
        label: 'Tareas',
        iconName: 'task',
        routerLink: '/user-tasks',
        exact: false,
      },
    ];
  }
}
