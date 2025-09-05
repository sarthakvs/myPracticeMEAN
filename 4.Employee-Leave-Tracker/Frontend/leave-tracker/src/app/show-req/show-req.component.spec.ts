import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReqComponent } from './show-req.component';

describe('ShowReqComponent', () => {
  let component: ShowReqComponent;
  let fixture: ComponentFixture<ShowReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowReqComponent]
    });
    fixture = TestBed.createComponent(ShowReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
