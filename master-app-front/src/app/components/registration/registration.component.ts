import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserObservable: Subscription;
  registrationForm = this.fb.group({
    name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    phone_number: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private callBroker: CallBrokerUser) { }

  ngOnInit() {
  }

  onSubmit() {
    let name = this.registrationForm.get('name').value;
    let last_name = this.registrationForm.get('last_name').value;
    let email = this.registrationForm.get('email').value;
    let password = this.registrationForm.get('password').value;
    let phone_number = this.registrationForm.get('phone_number').value;
    this.registerUserObservable = this.callBroker.registerUser(name, last_name, email, password, phone_number)
    .subscribe((response:any) => {
      console.log(response)
      this.router.navigateByUrl('dashboard/firstPage');
    }, (err) => {
      console.log(err);
    });

  }

}
