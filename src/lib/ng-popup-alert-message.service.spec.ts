import { TestBed } from '@angular/core/testing';

import { NgPopupAlertMessageService } from './ng-popup-alert-message.service';

describe('NgPopupAlertMessageService', () => {
  let service: NgPopupAlertMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPopupAlertMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
