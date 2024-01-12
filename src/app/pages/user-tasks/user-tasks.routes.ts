import { Route } from '@angular/router';
import { UserTasksGridComponent } from './user-tasks-grid/user-tasks-grid.component';
import { CreateUserTaskComponent } from './create-user-task/create-user-task.component';
import { EditUserTaskComponent } from './edit-user-task/edit-user-task.component';
import { UserTaskDetailComponent } from './user-task-detail/user-task-detail.component';

export const routes: Route[] = [
  {
    path: '',
    component: UserTasksGridComponent,
  },
  {
    path: 'create',
    component: CreateUserTaskComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserTaskComponent,
  },
  {
    path: 'detail/:id',
    component: UserTaskDetailComponent,
  },
];
