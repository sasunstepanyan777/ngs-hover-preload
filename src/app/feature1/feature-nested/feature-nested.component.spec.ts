import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNestedComponent } from './feature-nested.component';

describe('FeatureNestedComponent', () => {
  let component: FeatureNestedComponent;
  let fixture: ComponentFixture<FeatureNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
