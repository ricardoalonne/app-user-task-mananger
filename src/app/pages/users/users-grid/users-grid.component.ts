import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/api-services/user.service';
import { UserResponse } from '../../../models/response/user.response';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CustomGridModule } from '../../../shared/modules/custom-grid.module';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { DeleteUserDialogComponent } from '../dialogs/delete-user.dialog/delete-user.dialog.component';

@Component({
  selector: 'app-users-grid',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomGridModule],
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.scss',
})
export class UsersGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: UserResponse[] = [];
  displayedColumns: string[] = [
    'name',
    'lastName',
    'email',
    'phone',
    'createdAt',
    'updatedAt',
    'actions',
  ];
  dataSource!: MatTableDataSource<UserResponse>;
  title = 'Usuarios';

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.dataSource = new MatTableDataSource<UserResponse>(this.users);
        this.paginator.length = this.users.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onDelete(user: UserResponse): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }
}
