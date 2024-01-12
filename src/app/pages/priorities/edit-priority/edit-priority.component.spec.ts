import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriorityComponent } from './edit-priority.component';

describe('EditPriorityComponent', () => {
  let component: EditPriorityComponent;
  let fixture: ComponentFixture<EditPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
