import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSciComponent } from './social-sci.component';

describe('SocialSciComponent', () => {
  let component: SocialSciComponent;
  let fixture: ComponentFixture<SocialSciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
