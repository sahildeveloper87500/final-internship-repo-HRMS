import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSubHeaderComponent } from './master-sub-header.component';

describe('MasterSubHeaderComponent', () => {
  let component: MasterSubHeaderComponent;
  let fixture: ComponentFixture<MasterSubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterSubHeaderComponent]
    });
    fixture = TestBed.createComponent(MasterSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
