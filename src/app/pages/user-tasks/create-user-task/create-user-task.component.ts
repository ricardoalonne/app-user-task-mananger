import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTaskService } from '../../../services/api-services/user-task.service';
import { UserResumeResponse } from '../../../models/response/user-resume.response';
import { UserService } from '../../../services/api-services/user.service';
import { PriorityService } from '../../../services/api-services/priority.service';
import { PriorityResponse } from '../../../models/response/priority.response';
import { MatDialog } from '@angular/material/dialog';
import { CreationNotAvailableDialogComponent } from '../dialogs/creation-not-available.dialog/creation-not-available.dialog.component';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-create-user-task',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './create-user-task.component.html',
  styleUrl: './create-user-task.component.scss',
})
export class CreateUserTaskComponent implements OnInit {
  title = 'Crear Tarea';
  formUserTask!: FormGroup;
  today = new Date();
  users: UserResumeResponse[] = [];
  priorities: PriorityResponse[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userTaskService: UserTaskService,
    private userSevice: UserService,
    private priorityService: PriorityService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const data = history.state;

    this.formUserTask = this.formBuilder.group({
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      finished: [false, [Validators.required]],
      deleted: [false, [Validators.required]],
      expirationAt: [this.today, [Validators.required]],
      userId: [data?.userId ?? 1, [Validators.required]],
      priorityId: [1, [Validators.required]],
    });

    // this.userSevice.getUsersForResume().subscribe({
    //   next: (response) => {
    //     this.users = response;
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    // });
    // this.priorityService.getPriorities().subscribe({
    //   next: (response) => {
    //     this.priorities = response;
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    // });

    combineLatest([
      this.userSevice.getUsersForResume(),
      this.priorityService.getPriorities(),
    ]).subscribe({
      next: ([responseUsers, responsePriorities]) => {
        this.users = responseUsers;
        this.priorities = responsePriorities;

        if (responseUsers.length === 0 || responsePriorities.length === 0) {
          this.onCreationNotAvailable(
            responseUsers.length > 0,
            responsePriorities.length > 0
          );
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected get controlDescription() {
    return this.formUserTask.get('description');
  }
  protected get controlLastTags() {
    return this.formUserTask.get('tags');
  }
  protected get controlFinished() {
    return this.formUserTask.get('finished');
  }
  protected get controlDeleted() {
    return this.formUserTask.get('deleted');
  }
  protected get controlExpirationAt() {
    return this.formUserTask.get('expirationAt');
  }
  protected get controlUserId() {
    return this.formUserTask.get('userId');
  }
  protected get controlPriorityId() {
    return this.formUserTask.get('priorityId');
  }

  onCreationNotAvailable(anyUsers: boolean, anyPriorities: boolean): void {
    this.dialog.open(CreationNotAvailableDialogComponent, {
      data: { anyUsers, anyPriorities },
    });
  }

  onClear() {
    this.controlDescription?.setValue('');
    this.controlLastTags?.setValue('');
    this.controlFinished?.setValue(false);
    this.controlDeleted?.setValue(false);
    this.controlExpirationAt?.setValue(this.today);
    this.controlUserId?.setValue(1);
    this.controlPriorityId?.setValue(1);
  }

  onSubmit() {
    if (this.formUserTask.valid) {
      const request = this.formUserTask.value;
      this.userTaskService.createUserTask(request).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/user-tasks');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
