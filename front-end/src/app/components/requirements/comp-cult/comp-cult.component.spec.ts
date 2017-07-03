import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCultComponent } from './comp-cult.component';

describe('CompCultComponent', () => {
  let component: CompCultComponent;
  let fixture: ComponentFixture<CompCultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
