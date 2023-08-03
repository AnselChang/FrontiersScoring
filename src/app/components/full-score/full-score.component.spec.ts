import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScoreComponent } from './full-score.component';

describe('FullScoreComponent', () => {
  let component: FullScoreComponent;
  let fixture: ComponentFixture<FullScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScoreComponent]
    });
    fixture = TestBed.createComponent(FullScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
