import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeComponent } from './work-type.component';

describe('WorkTypeComponent', () => {
  let component: WorkTypeComponent;
  let fixture: ComponentFixture<WorkTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTypeComponent]
    });
    fixture = TestBed.createComponent(WorkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
