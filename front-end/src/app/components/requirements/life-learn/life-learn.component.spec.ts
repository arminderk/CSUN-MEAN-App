import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeLearnComponent } from './life-learn.component';

describe('LifeLearnComponent', () => {
  let component: LifeLearnComponent;
  let fixture: ComponentFixture<LifeLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
