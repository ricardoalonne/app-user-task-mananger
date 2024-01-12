import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriorityResponse } from '../../../models/response/priority.response';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityService } from '../../../services/api-services/priority.service';

@Component({
  selector: 'app-edit-priority',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './edit-priority.component.html',
  styleUrl: './edit-priority.component.scss',
})
export class EditPriorityComponent implements OnInit {
  title = 'Editar Prioridad';
  formPriority!: FormGroup;
  currentPriority!: PriorityResponse;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private priorityService: PriorityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formPriority = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });

    const priorityId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.priorityService.getPriorityById(Number(priorityId)).subscribe({
      next: (response) => {
        this.currentPriority = response;

        this.controlId?.setValue(this.currentPriority.id);
        this.controlName?.setValue(this.currentPriority.name);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected get controlId() {
    return this.formPriority.get('id');
  }
  protected get controlName() {
    return this.formPriority.get('name');
  }

  onClear() {
    this.controlName?.setValue(this.currentPriority.name);
  }

  onSubmit() {
    if (this.formPriority.valid) {
      const request = this.formPriority.value;
      this.priorityService.updatePriority(request.id, request).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/priorities');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
