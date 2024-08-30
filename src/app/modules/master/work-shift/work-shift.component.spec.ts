import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftComponent } from './work-shift.component';

describe('WorkShiftComponent', () => {
  let component: WorkShiftComponent;
  let fixture: ComponentFixture<WorkShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkShiftComponent]
    });
    fixture = TestBed.createComponent(WorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
