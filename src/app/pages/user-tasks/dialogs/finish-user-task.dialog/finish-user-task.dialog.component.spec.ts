import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishUserTaskDialogComponent } from './finish-user-task.dialog.component';

describe('FinishUserTaskDialogComponent', () => {
  let component: FinishUserTaskDialogComponent;
  let fixture: ComponentFixture<FinishUserTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishUserTaskDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishUserTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
