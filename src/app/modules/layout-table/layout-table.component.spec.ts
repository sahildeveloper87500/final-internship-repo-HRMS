import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTableComponent } from './layout-table.component';

describe('LayoutTableComponent', () => {
  let component: LayoutTableComponent;
  let fixture: ComponentFixture<LayoutTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTableComponent]
    });
    fixture = TestBed.createComponent(LayoutTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
