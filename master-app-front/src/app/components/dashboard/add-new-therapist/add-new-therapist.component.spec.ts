import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTherapistComponent } from './add-new-therapist.component';

describe('AddNewTherapistComponent', () => {
  let component: AddNewTherapistComponent;
  let fixture: ComponentFixture<AddNewTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
