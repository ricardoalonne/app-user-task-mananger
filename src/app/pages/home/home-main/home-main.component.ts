import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { UserService } from '../../../services/api-services/user.service';
import { PriorityService } from '../../../services/api-services/priority.service';
import { UserTaskService } from '../../../services/api-services/user-task.service';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CommonModule, RouterModule, CustomEssentialsModule],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent implements OnInit {
  totalUsers = 0;
  totalPriorities = 0;
  totalUserTasks = 0;

  constructor(
    private userService: UserService,
    private priorityService: PriorityService,
    private userTaskService: UserTaskService
  ) {}

  ngOnInit(): void {
    this.userService.getTotalUsers().subscribe({
      next: (response) => {
        this.totalUsers = response;
      },
      error: (error) => {
        this.totalUsers = 0;
        console.error(error);
      },
    });
    this.priorityService.getTotalPriorities().subscribe({
      next: (response) => {
        this.totalPriorities = response;
      },
      error: (error) => {
        this.totalPriorities = 0;
        console.error(error);
      },
    });
    this.userTaskService.getTotalUserTasks().subscribe({
      next: (response) => {
        this.totalUserTasks = response;
      },
      error: (error) => {
        this.totalUserTasks = 0;
        console.error(error);
      },
    });
  }
}
