import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsnHumComponent } from './artsn-hum.component';

describe('ArtsnHumComponent', () => {
  let component: ArtsnHumComponent;
  let fixture: ComponentFixture<ArtsnHumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsnHumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsnHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
