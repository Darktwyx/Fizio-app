import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';
import { UserModel } from 'src/app/models/User.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginObservable: Subscription;
  user:UserModel[];
  noUser=false;
  emptyFields=false;
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, private callBroker: CallBrokerUser) { 
    let user = sessionStorage.getItem('user');
    if(user !== null){
      this.router.navigate(['/dashboard/firstPage']);
    }
  }

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
      this.loginObservable = this.callBroker.login(email, password).subscribe((response: UserModel[]) => {
        console.log("ODGOVOR ZA LOGIN", response);
        this.user=response;
        //nisi morao da smestas response u promenljivu
        //ali ja tako volim :)
        if(this.user.length>0){

          //ako ima usera
          sessionStorage.setItem('user', JSON.stringify(this.user[0]));
          this.router.navigate(['/dashboard/firstPage']);
        }else{
          this.noUser=true;
          setTimeout(() => {
            this.noUser=false;
          }, 5000);
         
        }
        //znaci ako ima usera on ce da ti udje OVDEE, idemo na back
        // znaci ako si na backu  odradio ispravan upit tebi ce ovde
        //sigurno da stigne user
        //idemo tamo


      }, (err) => {
        this.noUser=true;
        console.log(err);

      
      });
    } else {
    this.emptyFields=true;
//pazi ovo, napravicemo neku promenljuvu boolean errorExist
//ovde joj setujemo vrednost na true
//i samo na stranici tamo prikazemo poruku greske ako je vrednost ove promenljive true
//sad ces da vidis

    }



  }

}
