import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubHeaderComponent } from './employee-sub-header.component';

describe('EmployeeSubHeaderComponent', () => {
  let component: EmployeeSubHeaderComponent;
  let fixture: ComponentFixture<EmployeeSubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSubHeaderComponent]
    });
    fixture = TestBed.createComponent(EmployeeSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
