import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/api-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  title = 'Crear Usuario';
  formUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  protected get controlName() {
    return this.formUser.get('name');
  }
  protected get controlLastName() {
    return this.formUser.get('lastName');
  }
  protected get controlEmail() {
    return this.formUser.get('email');
  }
  protected get controlPhone() {
    return this.formUser.get('phone');
  }

  onClear() {
    this.controlName?.setValue('');
    this.controlLastName?.setValue('');
    this.controlEmail?.setValue('');
    this.controlPhone?.setValue('');
  }

  onSubmit() {
    if (this.formUser.valid) {
      const request = this.formUser.value;
      this.userService.createUser(request).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/users');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
