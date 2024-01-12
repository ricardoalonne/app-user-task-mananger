import { Route } from '@angular/router';
import { PrioritiesGridComponent } from './priorities-grid/priorities-grid.component';
import { CreatePriorityComponent } from './create-priority/create-priority.component';
import { EditPriorityComponent } from './edit-priority/edit-priority.component';

export const routes: Route[] = [
  {
    path: '',
    component: PrioritiesGridComponent,
  },
  {
    path: 'create',
    component: CreatePriorityComponent,
  },
  {
    path: 'edit/:id',
    component: EditPriorityComponent,
  },
];
