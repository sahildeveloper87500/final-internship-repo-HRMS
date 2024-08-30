import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSubHeaderComponent } from './asset-sub-header.component';

describe('AssetSubHeaderComponent', () => {
  let component: AssetSubHeaderComponent;
  let fixture: ComponentFixture<AssetSubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetSubHeaderComponent]
    });
    fixture = TestBed.createComponent(AssetSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
