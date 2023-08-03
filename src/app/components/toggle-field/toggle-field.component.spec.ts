import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFieldComponent } from './toggle-field.component';

describe('ToggleFieldComponent', () => {
  let component: ToggleFieldComponent;
  let fixture: ComponentFixture<ToggleFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleFieldComponent]
    });
    fixture = TestBed.createComponent(ToggleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
