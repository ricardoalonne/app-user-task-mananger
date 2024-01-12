import { Route } from '@angular/router';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Route[] = [
  {
    path: '',
    component: UsersGridComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
  },
];
