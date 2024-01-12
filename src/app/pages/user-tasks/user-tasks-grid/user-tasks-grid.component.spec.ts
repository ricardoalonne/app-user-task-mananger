import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTasksGridComponent } from './user-tasks-grid.component';

describe('UserTasksGridComponent', () => {
  let component: UserTasksGridComponent;
  let fixture: ComponentFixture<UserTasksGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTasksGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTasksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
