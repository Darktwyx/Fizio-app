import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistsTableUserComponent } from './therapists-table-user.component';

describe('TherapistsTableUserComponent', () => {
  let component: TherapistsTableUserComponent;
  let fixture: ComponentFixture<TherapistsTableUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistsTableUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistsTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
