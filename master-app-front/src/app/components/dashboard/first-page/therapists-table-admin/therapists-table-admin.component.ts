import { Component, OnInit } from '@angular/core';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';

@Component({
  selector: 'app-therapists-table-admin',
  templateUrl: './therapists-table-admin.component.html',
  styleUrls: ['./therapists-table-admin.component.css']
})
export class TherapistsTableAdminComponent implements OnInit {
  therapists;
  constructor(private callBroker: CallBrokerTherapistService) {
    callBroker.getAllTherapistsWithTherapies()
      .subscribe(response => {
        console.log(Object.values(this.groupBy(response, 'therapist_id')))
        this.therapists = Object.values(this.groupBy(response, 'therapist_id'));
      }, err => {
        console.log(err)
      })
  }

  ngOnInit() {
  }

  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  activate(therapist) {
    this.callBroker.activateTherapist(therapist.therapist_id)
      .subscribe(response => {
        console.log(response);
        this.callBroker.getAllTherapistsWithTherapies()
          .subscribe(response => {
            console.log(Object.values(this.groupBy(response, 'therapist_id')))
            this.therapists = Object.values(this.groupBy(response, 'therapist_id'));
          }, err => {
            console.log(err)
          })
      }, err => {
        console.log(err);
      })
  }
  deactivate(therapist) {
    this.callBroker.deactivateTherapist(therapist.therapist_id)
      .subscribe(response => {
        console.log(response);
        this.callBroker.getAllTherapistsWithTherapies()
          .subscribe(response => {
            console.log(Object.values(this.groupBy(response, 'therapist_id')))
            this.therapists = Object.values(this.groupBy(response, 'therapist_id'));
          }, err => {
            console.log(err)
          })
      }, err => {
        console.log(err);
      })

  }
}
