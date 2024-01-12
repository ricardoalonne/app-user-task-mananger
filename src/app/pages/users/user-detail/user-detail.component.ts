import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../../models/response/user.response';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/api-services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { DeleteUserDialogComponent } from '../dialogs/delete-user.dialog/delete-user.dialog.component';
import { UserTasksGridComponent } from '../../user-tasks/user-tasks-grid/user-tasks-grid.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    CustomEssentialsModule,
    CustomFormModule,
    UserTasksGridComponent,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  title = 'Detalles de Usuario';
  currentUser!: UserResponse;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.currentUser = {
      id: 0,
      name: '',
      lastName: '',
      email: '',
      phone: '',
      createdAt: this.today,
      updatedAt: this.today,
    };

    const userId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.userService.getUserById(Number(userId)).subscribe({
      next: (response) => {
        this.currentUser = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onDelete(): void {
    this.dialog.open(DeleteUserDialogComponent, {
      data: this.currentUser,
    });
  }
}
