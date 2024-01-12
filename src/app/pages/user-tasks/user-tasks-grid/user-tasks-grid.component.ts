import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserTaskResponse } from '../../../models/response/user-task.response';
import { MatTableDataSource } from '@angular/material/table';
import { UserTaskService } from '../../../services/api-services/user-task.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveUserTaskDialogComponent } from '../dialogs/remove-user-task.dialog/remove-user-task.dialog.component';
import { FinishUserTaskDialogComponent } from '../dialogs/finish-user-task.dialog/finish-user-task.dialog.component';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomGridModule } from '../../../shared/modules/custom-grid.module';
import { MatTabsModule } from '@angular/material/tabs';
import { UserTaskModeType } from '../../../models/types/user-task-mode.type';

@Component({
  selector: 'app-user-tasks-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    CustomEssentialsModule,
    CustomGridModule,
  ],
  templateUrl: './user-tasks-grid.component.html',
  styleUrl: './user-tasks-grid.component.scss',
})
export class UserTasksGridComponent implements OnInit {
  @Input() userId: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  userTask: UserTaskResponse[] = [];
  displayedColumns: string[] = [
    'description',
    'tags',
    'userFullName',
    'priorityName',
    'expirationAt',
    'createdAt',
    'updatedAt',
    'actions',
  ];
  dataSource!: MatTableDataSource<UserTaskResponse>;
  title = 'Tareas';
  tabs = ['Todas', 'Pendientes', 'Finalizadas', 'Eliminadas'];
  selected: number = 0;

  constructor(
    private userTaskService: UserTaskService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUserTask('all');
  }

  loadUserTask(mode: UserTaskModeType) {
    this.userTaskService.getUserTaskByMode(this.userId, mode).subscribe({
      next: (response) => {
        this.userTask = response;
        this.dataSource = new MatTableDataSource<UserTaskResponse>(
          this.userTask
        );
        this.paginator.length = this.userTask.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onRemove(userTask: UserTaskResponse): void {
    const dialogRef = this.dialog.open(RemoveUserTaskDialogComponent, {
      data: userTask,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadUserTask('all');
    });
  }

  onFinish(userTask: UserTaskResponse): void {
    const dialogRef = this.dialog.open(FinishUserTaskDialogComponent, {
      data: userTask,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadUserTask('all');
    });
  }

  onSelectionIndexChange(index: number) {
    const mode: UserTaskModeType[] = ['all', 'pending', 'finished', 'deleted'];
    this.loadUserTask(mode[index]);
  }
}
