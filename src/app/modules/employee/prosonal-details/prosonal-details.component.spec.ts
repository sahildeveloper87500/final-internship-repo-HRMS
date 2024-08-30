import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsonalDetailsComponent } from './prosonal-details.component';

describe('ProsonalDetailsComponent', () => {
  let component: ProsonalDetailsComponent;
  let fixture: ComponentFixture<ProsonalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsonalDetailsComponent]
    });
    fixture = TestBed.createComponent(ProsonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
