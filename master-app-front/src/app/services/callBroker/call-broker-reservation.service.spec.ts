import { TestBed } from '@angular/core/testing';

import { CallBrokerReservationService } from './call-broker-reservation.service';

describe('CallBrokerReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallBrokerReservationService = TestBed.get(CallBrokerReservationService);
    expect(service).toBeTruthy();
  });
});
