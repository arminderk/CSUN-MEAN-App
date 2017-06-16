import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalSciencesComponent } from './natural-sciences.component';

describe('NaturalSciencesComponent', () => {
  let component: NaturalSciencesComponent;
  let fixture: ComponentFixture<NaturalSciencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalSciencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
