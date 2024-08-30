import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencePunchComponent } from './attendence-punch.component';

describe('AttendencePunchComponent', () => {
  let component: AttendencePunchComponent;
  let fixture: ComponentFixture<AttendencePunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendencePunchComponent]
    });
    fixture = TestBed.createComponent(AttendencePunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
