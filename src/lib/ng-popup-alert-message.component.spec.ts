import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPopupAlertMessageComponent } from './ng-popup-alert-message.component';

describe('NgPopupAlertMessageComponent', () => {
  let component: NgPopupAlertMessageComponent;
  let fixture: ComponentFixture<NgPopupAlertMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPopupAlertMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPopupAlertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
