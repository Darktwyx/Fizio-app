import { Component, OnInit } from '@angular/core';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isUser;
  user;
  constructor(private callBrokerUser:CallBrokerUser, private callBrokerTherapist:CallBrokerTherapistService) {
    const sessionStorageUser = sessionStorage.getItem('user');
    const user = JSON.parse(sessionStorageUser);
    this.user = user;
    this.isUser = (user.therapist_id) ? false:true;
   }

  ngOnInit() {
  }
  updateUser(){
    console.log(this.user)
    this.callBrokerUser.updateUser(this.user)
    .subscribe(response=>{
      console.log(response);
      sessionStorage.setItem('user', JSON.stringify(response));
      alert("Uspešno ažuriranje!");
    }, err=>{
      console.log(err);
    })
  }
  updateTherapist(){
    console.log(this.user)
    this.callBrokerTherapist.updateTherapist(this.user)
    .subscribe(response=>{
      console.log(response);
      sessionStorage.setItem('user', JSON.stringify(response));
      alert("Uspešno ažuriranje!");
    }, err=>{
      console.log(err);
    })
  }
}
