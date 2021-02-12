import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationsResponseModel } from 'src/app/models/ReservationsResponse.model';
import { CallBrokerReservationService } from 'src/app/services/callBroker/call-broker-reservation.service';



@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {
  getAllReservationObservable: Subscription;
  reservationsArray: ReservationsResponseModel[] = [];
  reservations;
  constructor(private callBroker: CallBrokerReservationService) {
    const sessionStorageUser = sessionStorage.getItem('user');
    const user = JSON.parse(sessionStorageUser);
    callBroker.getAllReservationsForUser(user.user_id)
      .subscribe(response => {
        console.log(response)
        this.reservations = response;
        this.reservations.forEach(r => {
          r.date = new Date(r.date);
          r.start_time = new Date(r.start_time);
          r.end_time = new Date(r.end_time);
          if (!r.accepted && !r.denied) {
            r.status = 'WAITING'
            r.statusNgClass = 'waiting'
          } else if (r.accepted){
            r.status = 'ACCEPTED'
            r.statusNgClass = 'accepted'
          }else{
            r.status = 'DENIED'
            r.statusNgClass = 'denied'
          }
      })
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

}
