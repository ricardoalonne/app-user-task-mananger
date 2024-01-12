import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserTaskDialogComponent } from './remove-user-task.dialog.component';

describe('RemoveUserTaskDialogComponent', () => {
  let component: RemoveUserTaskDialogComponent;
  let fixture: ComponentFixture<RemoveUserTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveUserTaskDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveUserTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
