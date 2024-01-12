import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserResponse } from '../../../models/response/user.response';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/api-services/user.service';
import { CommonModule } from '@angular/common';
import { CustomEssentialsModule } from '../../../shared/modules/custom-essentials';
import { CustomFormModule } from '../../../shared/modules/custom-form.module';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, CustomEssentialsModule, CustomFormModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  title = 'Editar Usuario';
  formUser!: FormGroup;
  currentUser!: UserResponse;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });

    const userTaskId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.userService.getUserById(Number(userTaskId)).subscribe({
      next: (response) => {
        this.currentUser = response;

        this.controlId?.setValue(this.currentUser.id);
        this.controlName?.setValue(this.currentUser.name);
        this.controlLastName?.setValue(this.currentUser.lastName);
        this.controlEmail?.setValue(this.currentUser.email);
        this.controlPhone?.setValue(this.currentUser.phone);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected get controlId() {
    return this.formUser.get('id');
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
    this.controlName?.setValue(this.currentUser.name);
    this.controlLastName?.setValue(this.currentUser.lastName);
    this.controlEmail?.setValue(this.currentUser.email);
    this.controlPhone?.setValue(this.currentUser.phone);
  }

  onSubmit() {
    if (this.formUser.valid) {
      const request = this.formUser.value;
      this.userService.updateUser(request.id, request).subscribe({
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
