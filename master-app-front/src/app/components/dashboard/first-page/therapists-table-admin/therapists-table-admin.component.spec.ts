import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistsTableAdminComponent } from './therapists-table-admin.component';

describe('TherapistsTableAdminComponent', () => {
  let component: TherapistsTableAdminComponent;
  let fixture: ComponentFixture<TherapistsTableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistsTableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistsTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
