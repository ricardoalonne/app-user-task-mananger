import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesGridComponent } from './priorities-grid.component';

describe('PrioritiesGridComponent', () => {
  let component: PrioritiesGridComponent;
  let fixture: ComponentFixture<PrioritiesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioritiesGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrioritiesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
