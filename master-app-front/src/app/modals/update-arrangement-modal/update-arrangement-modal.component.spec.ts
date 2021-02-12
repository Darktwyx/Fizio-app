import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArrangementModalComponent } from './update-arrangement-modal.component';

describe('UpdateArrangementModalComponent', () => {
  let component: UpdateArrangementModalComponent;
  let fixture: ComponentFixture<UpdateArrangementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArrangementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArrangementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
