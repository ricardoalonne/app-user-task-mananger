import { Component, Inject, OnInit } from '@angular/core';
import { PriorityResponse } from '../../../../models/response/priority.response';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CustomEssentialsModule } from '../../../../shared/modules/custom-essentials';
import { Router } from '@angular/router';
import { PriorityService } from '../../../../services/api-services/priority.service';

@Component({
  selector: 'app-delete-priority.dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CustomEssentialsModule],
  templateUrl: './delete-priority.dialog.component.html',
  styleUrl: './delete-priority.dialog.component.scss',
})
export class DeletePriorityDialogComponent implements OnInit {
  currentPriority!: PriorityResponse;

  constructor(
    public dialogRef: MatDialogRef<DeletePriorityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PriorityResponse,
    private priorityService: PriorityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentPriority = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.priorityService.deletePriority(this.currentPriority.id).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/priorities');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
