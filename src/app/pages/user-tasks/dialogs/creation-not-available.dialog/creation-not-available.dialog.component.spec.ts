import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationNotAvailableDialogComponent } from './creation-not-available.dialog.component';

describe('CreationNotAvailableDialogComponent', () => {
  let component: CreationNotAvailableDialogComponent;
  let fixture: ComponentFixture<CreationNotAvailableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationNotAvailableDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationNotAvailableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
