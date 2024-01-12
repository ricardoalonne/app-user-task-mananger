import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomGridModule } from '../../../shared/modules/custom-grid.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PriorityResponse } from '../../../models/response/priority.response';
import { PriorityService } from '../../../services/api-services/priority.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletePriorityDialogComponent } from '../dialogs/delete-priority.dialog/delete-priority.dialog.component';

@Component({
  selector: 'app-priorities-grid',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomGridModule],
  templateUrl: './priorities-grid.component.html',
  styleUrl: './priorities-grid.component.scss',
})
export class PrioritiesGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  priorities: PriorityResponse[] = [];
  displayedColumns: string[] = ['name', 'actions'];
  dataSource!: MatTableDataSource<PriorityResponse>;
  title = 'Prioridades';

  constructor(
    private priorityService: PriorityService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPriorities();
  }

  loadPriorities() {
    this.priorityService.getPriorities().subscribe({
      next: (response) => {
        this.priorities = response;
        this.dataSource = new MatTableDataSource<PriorityResponse>(
          this.priorities
        );
        this.paginator.length = this.priorities.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onDelete(priority: PriorityResponse): void {
    const dialogRef = this.dialog.open(DeletePriorityDialogComponent, {
      data: priority,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadPriorities();
    });
  }
}
