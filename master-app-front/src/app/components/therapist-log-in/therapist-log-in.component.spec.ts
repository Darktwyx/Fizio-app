import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistLogInComponent } from './therapist-log-in.component';

describe('TherapistLogInComponent', () => {
  let component: TherapistLogInComponent;
  let fixture: ComponentFixture<TherapistLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
