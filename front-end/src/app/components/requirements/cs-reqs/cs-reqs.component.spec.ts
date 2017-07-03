import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsReqsComponent } from './cs-reqs.component';

describe('CsReqsComponent', () => {
  let component: CsReqsComponent;
  let fixture: ComponentFixture<CsReqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsReqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
