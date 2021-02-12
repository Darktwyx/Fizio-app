import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';

@Component({
  selector: 'app-therapists-table-user',
  templateUrl: './therapists-table-user.component.html',
  styleUrls: ['./therapists-table-user.component.css']
})
export class TherapistsTableUserComponent implements OnInit {

  therapists;
  constructor(private router: Router, private callBroker: CallBrokerTherapistService) {
    callBroker.getAllTherapistsWithTherapies()
      .subscribe(response => {
        this.therapists = Object.values(this.groupBy(response, 'therapist_id'));
        console.log(this.therapists)
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

  openProfile(therapist) {
    this.router.navigate(['/dashboard/therapist', therapist[0].therapist_id]);
  }
  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

}
