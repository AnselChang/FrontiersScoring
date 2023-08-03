import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLabelBlockComponent } from './field-label-block.component';

describe('FieldLabelBlockComponent', () => {
  let component: FieldLabelBlockComponent;
  let fixture: ComponentFixture<FieldLabelBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldLabelBlockComponent]
    });
    fixture = TestBed.createComponent(FieldLabelBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
