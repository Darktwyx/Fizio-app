import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/User.model';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';

@Component({
  selector: 'app-therapist-log-in',
  templateUrl: './therapist-log-in.component.html',
  styleUrls: ['./therapist-log-in.component.css']
})
export class TherapistLogInComponent implements OnInit {
  loginObservable: Subscription;
  user: UserModel[];
  noUser = false;
  notActivated = false;
  emptyFields = false;
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, private callBroker: CallBrokerTherapistService) { }

  ngOnInit() {
  }

  goToRegistration() {
    this.router.navigate(['registration']);
  }
  onSubmit() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    console.log("email", email, "password", password);

    //VALIDACIJA ZA BAZU??? - da proveri da li postoji user u bazi???

    //Ili je to validacija da proverli da je uneo polja i da li je uneo format maila naziv@gmail.com? to je validacija
    // || ovo ti je znak za ili, ne mora u isto vreme da ti budu oba parametra prazna
    // moze samo jedan, to je dovoljan znak da validacija nije ok 
    //zbog toga ILI 


    //ako npr nije prazno onda pozovi u suprotnom baci poruku neku
    if(email == "" || password == "")
    {
      this.emptyFields=true;
      setTimeout(() => {
        this.emptyFields=false;
      }, 5000);
    }
    if (email != "" || password != "") {
      this.loginObservable = this.callBroker.loginTherapist(email, password).subscribe((response: UserModel[]) => {
        console.log("ODGOVOR ZA LOGIN", response);
        this.user = response;
        if (this.user.length > 0) {
          sessionStorage.setItem('user', JSON.stringify(this.user[0]));
          this.router.navigate(['/dashboard/firstPage']);
        } else {
          this.noUser = true;
          setTimeout(() => {
            this.noUser = false;
          }, 5000);
        }
      }, (err) => {
        if(err.statusCode == 102){
          this.notActivated = true;
             setTimeout(() => {
          this.notActivated=false;
      }, 5000);
        }else{
          this.noUser = true;
        }
        console.log(err);
      });
    } else {
      this.emptyFields = true;
    }
  }
}
