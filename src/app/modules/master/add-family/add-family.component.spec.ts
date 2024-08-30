import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyComponent } from './add-family.component';

describe('AddFamilyComponent', () => {
  let component: AddFamilyComponent;
  let fixture: ComponentFixture<AddFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFamilyComponent]
    });
    fixture = TestBed.createComponent(AddFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
