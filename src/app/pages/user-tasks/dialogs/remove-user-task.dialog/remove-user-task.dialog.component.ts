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
  selector: 'app-remove-user-task.dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CustomEssentialsModule],
  templateUrl: './remove-user-task.dialog.component.html',
  styleUrl: './remove-user-task.dialog.component.scss',
})
export class RemoveUserTaskDialogComponent implements OnInit {
  currentUserTask!: UserTaskResponse;

  constructor(
    public dialogRef: MatDialogRef<RemoveUserTaskDialogComponent>,
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

  onRemove() {
    this.userTaskService.removeUserTask(this.currentUserTask.id).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/user-tasks');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
