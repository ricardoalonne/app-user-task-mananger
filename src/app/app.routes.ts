import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.routes').then((m) => m.routes),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.routes').then((m) => m.routes),
      },
      {
        path: 'priorities',
        loadChildren: () =>
          import('./pages/priorities/priorities.routes').then((m) => m.routes),
      },
      {
        path: 'user-tasks',
        loadChildren: () =>
          import('./pages/user-tasks/user-tasks.routes').then((m) => m.routes),
      },
    ],
  },
];
