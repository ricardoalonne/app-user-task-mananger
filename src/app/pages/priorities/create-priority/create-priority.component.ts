import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriorityService } from '../../../services/api-services/priority.service';

@Component({
  selector: 'app-create-priority',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './create-priority.component.html',
  styleUrl: './create-priority.component.scss',
})
export class CreatePriorityComponent {
  title = 'Crear Prioridad';
  formPriority!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private priorityService: PriorityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formPriority = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  protected get controlName() {
    return this.formPriority.get('name');
  }

  onClear() {
    this.controlName?.setValue('');
  }

  onSubmit() {
    if (this.formPriority.valid) {
      const request = this.formPriority.value;
      this.priorityService.createPriority(request).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/prioritys');
        },
      });
    }
  }
}
