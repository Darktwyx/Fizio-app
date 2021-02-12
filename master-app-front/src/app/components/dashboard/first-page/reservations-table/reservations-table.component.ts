import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallBrokerReservationService } from 'src/app/services/callBroker/call-broker-reservation.service';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.css']
})
export class ReservationsTableComponent implements OnInit {
  reservations;
  therapist_id;
  constructor(private callBroker: CallBrokerTherapistService, private callBrokerRes:CallBrokerReservationService) {
    callBroker.getAllTherapistReservations()
      .subscribe(response => {
        console.log(response)
        this.reservations = response;
      }, err => {
        console.log(err)
      })
  }

  ngOnInit() {
  }

  accept(reservation){
    this.callBrokerRes.acceptReservation(reservation.reservation_id)
    .subscribe(response=>{
      console.log(response);
      this.callBroker.getAllTherapistReservations()
        .subscribe(response => {
          console.log(response)
          this.reservations = response;
        }, err => {
          console.log(err)
        })
    }, err=>{
      console.log(err);
    })
  }

  deny(reservation){
    this.callBrokerRes.denyReservation(reservation.reservation_id)
    .subscribe(response=>{
      console.log(response);
      this.callBroker.getAllTherapistReservations()
        .subscribe(response => {
          console.log(response)
          this.reservations = response;
        }, err => {
          console.log(err)
        })
    }, err=>{
      console.log(err);
    })
  }

}
