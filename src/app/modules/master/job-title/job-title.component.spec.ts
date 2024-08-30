import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitleComponent } from './job-title.component';

describe('JobTitleComponent', () => {
  let component: JobTitleComponent;
  let fixture: ComponentFixture<JobTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobTitleComponent]
    });
    fixture = TestBed.createComponent(JobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
