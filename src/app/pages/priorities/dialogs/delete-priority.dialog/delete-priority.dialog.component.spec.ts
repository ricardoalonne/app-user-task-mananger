import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePriorityDialogComponent } from './delete-priority.dialog.component';

describe('DeletePriorityDialogComponent', () => {
  let component: DeletePriorityDialogComponent;
  let fixture: ComponentFixture<DeletePriorityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePriorityDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePriorityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
