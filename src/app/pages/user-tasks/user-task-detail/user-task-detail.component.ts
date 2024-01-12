import { Component, OnInit } from '@angular/core';
import { UserTaskResponse } from '../../../models/response/user-task.response';
import { ActivatedRoute } from '@angular/router';
import { UserTaskService } from '../../../services/api-services/user-task.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveUserTaskDialogComponent } from '../dialogs/remove-user-task.dialog/remove-user-task.dialog.component';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FinishUserTaskDialogComponent } from '../dialogs/finish-user-task.dialog/finish-user-task.dialog.component';

@Component({
  selector: 'app-user-task-detail',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './user-task-detail.component.html',
  styleUrl: './user-task-detail.component.scss',
})
export class UserTaskDetailComponent implements OnInit {
  title = 'Detalles de Tarea';
  currentUserTask!: UserTaskResponse;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private userTaskService: UserTaskService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.currentUserTask = {
      id: 0,
      description: '',
      tags: '',
      finished: false,
      deleted: false,
      expirationAt: this.today,
      createdAt: this.today,
      updatedAt: this.today,
      userId: 0,
      userFullName: '',
      priorityId: 0,
      priorityName: '',
    };

    const userTaskId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.userTaskService.getUserTaskById(Number(userTaskId)).subscribe({
      next: (response) => {
        this.currentUserTask = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onRemove(): void {
    this.dialog.open(RemoveUserTaskDialogComponent, {
      data: this.currentUserTask,
    });
  }

  onFinish(): void {
    this.dialog.open(FinishUserTaskDialogComponent, {
      data: this.currentUserTask,
    });
  }
}
