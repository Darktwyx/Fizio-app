import { TestBed } from '@angular/core/testing';

import { CallBrokerTherapistService } from './call-broker-therapist.service';

describe('CallBrokerTherapistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallBrokerTherapistService = TestBed.get(CallBrokerTherapistService);
    expect(service).toBeTruthy();
  });
});
