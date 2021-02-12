import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';

@Component({
  selector: 'app-add-new-therapist',
  templateUrl: './add-new-therapist.component.html',
  styleUrls: ['./add-new-therapist.component.css']
})
export class AddNewTherapistComponent implements OnInit {
  registerUserObservable: Subscription;
  registrationForm = this.fb.group({
    name: ["", Validators.required],
    lastname: ["", Validators.required],
    username: ["", Validators.required],
    password: ["", Validators.required],
    email: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    role: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private callBroker: CallBrokerUser) { }

  ngOnInit() {
  }

}
