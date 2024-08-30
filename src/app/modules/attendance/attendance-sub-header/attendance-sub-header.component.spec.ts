import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSubHeaderComponent } from './attendance-sub-header.component';

describe('AttendanceSubHeaderComponent', () => {
  let component: AttendanceSubHeaderComponent;
  let fixture: ComponentFixture<AttendanceSubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceSubHeaderComponent]
    });
    fixture = TestBed.createComponent(AttendanceSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
