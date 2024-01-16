import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../../shared/modules/custom-essentials';

@Component({
  selector: 'app-creation-not-available.dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CustomEssentialsModule],
  templateUrl: './creation-not-available.dialog.component.html',
  styleUrl: './creation-not-available.dialog.component.scss',
})
export class CreationNotAvailableDialogComponent implements OnInit {
  anyUsers = false;
  anyPriorities = false;
  message = 'Para poder agregar una tarea será necesario agregar previamente';

  constructor(
    public dialogRef: MatDialogRef<CreationNotAvailableDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { anyUsers: boolean; anyPriorities: boolean },
    private router: Router
  ) {}

  ngOnInit(): void {
    this.anyUsers = this.data.anyUsers;
    this.anyPriorities = this.data.anyPriorities;

    if (!this.anyUsers && !this.anyPriorities) {
      this.message += ' usuarios y prioridades';
    }

    if (this.anyUsers && !this.anyPriorities) {
      this.message += ' prioridades';
    }

    if (!this.anyUsers && this.anyPriorities) {
      this.message += ' usuarios';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onGoToCreteUser() {
    this.router.navigate(['/users/create']);
  }

  onGoToCretePriority() {
    this.router.navigate(['/priorities/create']);
  }
}
