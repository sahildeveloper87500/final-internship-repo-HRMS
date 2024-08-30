import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGradeComponent } from './pay-grade.component';

describe('PayGradeComponent', () => {
  let component: PayGradeComponent;
  let fixture: ComponentFixture<PayGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayGradeComponent]
    });
    fixture = TestBed.createComponent(PayGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
