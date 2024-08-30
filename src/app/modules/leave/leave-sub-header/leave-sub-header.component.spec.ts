import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSubHeaderComponent } from './leave-sub-header.component';

describe('LeaveSubHeaderComponent', () => {
  let component: LeaveSubHeaderComponent;
  let fixture: ComponentFixture<LeaveSubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveSubHeaderComponent]
    });
    fixture = TestBed.createComponent(LeaveSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
