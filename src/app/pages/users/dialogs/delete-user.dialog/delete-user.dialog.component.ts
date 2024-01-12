import { Component, Inject, OnInit } from '@angular/core';
import { UserResponse } from '../../../../models/response/user.response';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserService } from '../../../../services/api-services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../../shared/modules/custom-essentials';

@Component({
  selector: 'app-delete-user.dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CustomEssentialsModule],
  templateUrl: './delete-user.dialog.component.html',
  styleUrl: './delete-user.dialog.component.scss',
})
export class DeleteUserDialogComponent implements OnInit {
  currentUser!: UserResponse;

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserResponse,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.userService.deleteUser(this.currentUser.id).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/users');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
