import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTaskService } from '../../../services/api-services/user-task.service';
import { UserService } from '../../../services/api-services/user.service';
import { PriorityService } from '../../../services/api-services/priority.service';
import { UserTaskResponse } from '../../../models/response/user-task.response';
import { UserResumeResponse } from '../../../models/response/user-resume.response';
import { PriorityResponse } from '../../../models/response/priority.response';

@Component({
  selector: 'app-edit-user-task',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './edit-user-task.component.html',
  styleUrl: './edit-user-task.component.scss',
})
export class EditUserTaskComponent implements OnInit {
  title = 'Editar Tarea';
  formUserTask!: FormGroup;
  currentUserTask!: UserTaskResponse;
  today = new Date();
  users: UserResumeResponse[] = [];
  priorities: PriorityResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userTaskService: UserTaskService,
    private userSevice: UserService,
    private priorityService: PriorityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formUserTask = this.formBuilder.group({
      id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      finished: [false, [Validators.required]],
      deleted: [false, [Validators.required]],
      expirationAt: [this.today, [Validators.required]],
      userId: [1, [Validators.required]],
      priorityId: [1, [Validators.required]],
    });

    const userTaskId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.userTaskService.getUserTaskById(Number(userTaskId)).subscribe({
      next: (response) => {
        this.currentUserTask = response;

        this.controlId?.setValue(this.currentUserTask.id);
        this.controlDescription?.setValue(this.currentUserTask.description);
        this.controlLastTags?.setValue(this.currentUserTask.tags);
        this.controlFinished?.setValue(this.currentUserTask.finished);
        this.controlDeleted?.setValue(this.currentUserTask.deleted);
        this.controlExpirationAt?.setValue(this.currentUserTask.expirationAt);
        this.controlUserId?.setValue(this.currentUserTask.userId);
        this.controlPriorityId?.setValue(this.currentUserTask.priorityId);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.userSevice.getUsersForResume().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.priorityService.getPriorities().subscribe({
      next: (response) => {
        this.priorities = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected get controlId() {
    return this.formUserTask.get('id');
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

  onClear() {
    this.controlDescription?.setValue(this.currentUserTask.description);
    this.controlLastTags?.setValue(this.currentUserTask.tags);
    this.controlFinished?.setValue(this.currentUserTask.finished);
    this.controlDeleted?.setValue(this.currentUserTask.deleted);
    this.controlExpirationAt?.setValue(this.currentUserTask.expirationAt);
    this.controlUserId?.setValue(this.currentUserTask.userId);
    this.controlPriorityId?.setValue(this.currentUserTask.priorityId);
  }

  onSubmit() {
    if (this.formUserTask.valid) {
      const request = this.formUserTask.value;
      this.userTaskService.updateUserTask(request.id, request).subscribe({
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
