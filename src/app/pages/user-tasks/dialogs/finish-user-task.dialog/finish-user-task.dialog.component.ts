import { Component, Inject, OnInit } from '@angular/core';
import { UserTaskResponse } from '../../../../models/response/user-task.response';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserTaskService } from '../../../../services/api-services/user-task.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../../shared/modules/custom-essentials';

@Component({
  selector: 'app-finish-user-task.dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CustomEssentialsModule],
  templateUrl: './finish-user-task.dialog.component.html',
  styleUrl: './finish-user-task.dialog.component.scss',
})
export class FinishUserTaskDialogComponent implements OnInit {
  currentUserTask!: UserTaskResponse;

  constructor(
    public dialogRef: MatDialogRef<FinishUserTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserTaskResponse,
    private userTaskService: UserTaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUserTask = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFinish() {
    this.userTaskService.finishUserTask(this.currentUserTask.id).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/user-tasks');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
