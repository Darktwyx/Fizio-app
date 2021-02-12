import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment.model';
import { CallBrokerReservationService } from 'src/app/services/callBroker/call-broker-reservation.service';
import { CallBrokerTherapistService } from 'src/app/services/callBroker/call-broker-therapist.service';



@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css']
})
export class TherapistDetailComponent implements OnInit {
  showComments: boolean = true;
  timeFrom = [];
  selectedTimeFrom;
  timeTo = [];
  selectedTimeTo;
  user;
  comments: Comment[] = [];
  comment;
  rate = 3;
  max = 5;
  therapist;
  therapist_id;
  selectedDate:Date;
  selectedTherapy;
  constructor(private route: ActivatedRoute, private callBroker: CallBrokerTherapistService, private callBrokerRes:CallBrokerReservationService,private router:Router) {
    const sessionStorageUser = sessionStorage.getItem('user');
    this.user = JSON.parse(sessionStorageUser);
    for (let i = 8; i < 22; i++) {
      this.timeFrom.push({
        text: `${(i > 9) ? i : '0' + i}:00`,
        value: i
      })
      this.timeTo.push({
        text: `${(i > 9) ? i : '0' + i}:00`,
        value: i
      })
    }
  }

  ngOnInit() {
    this.therapist_id = this.route.snapshot.paramMap.get('therapist_id')
    console.log(this.therapist_id)
    this.callBroker.getTherapist(this.therapist_id)
      .subscribe(response => {
        console.log(response);
        this.therapist = response[0];
        this.therapist.therapies = response;
      }, err => {
        console.log(err);
      })
    this.callBroker.getAllCommentsForTherapist(this.therapist_id)
      .subscribe(response => {
        console.log(response);
        this.comments = response as any;
      }, err => {
        console.log(err);
      })
  }
  // fromTimeChanged(val){
  //   const selectedValue = val.value;
  //   this.timeTo = this.timeTo.filter
  // }
  showCommentsMethod() {
    this.showComments = true;
    var com1 = new Comment(1, new Date(), 5, 'abvsasdadadadad', 1, 1);
    this.comments.push(com1);
  }
  saveComment(comment) {
    this.comments.push(new Comment(1, new Date(), this.rate, this.comment, 1, 1))
    this.callBroker.addComment({
      mark: this.rate,
      text: this.comment,
      therapist_id: this.therapist_id,
      user_id: this.user.user_id
    }).subscribe(response => {
      console.log(response)
    }, err => {
      console.log(err);
    })
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
  }
  addReservation(){
    let fromTime = new Date(this.selectedDate);
    fromTime.setHours(this.selectedTimeFrom);
    let toTime = new Date(this.selectedDate);
    console.log(this.selectedTimeFrom, toTime)
    toTime.setHours(this.selectedTimeTo);
    this.callBrokerRes.addReservation({
      date:this.selectedDate,
      start_time:fromTime,
      end_time:toTime,
      user_id:this.user.user_id,
      therapist_id:this.therapist_id,
      therapy_id:this.selectedTherapy
    })
    .subscribe(response=>{
      console.log(response)
      alert("Rezervacija poslata!")
      this.router.navigateByUrl('/dashboard/allReservations')
    }, err=>{
      console.log(err);
      alert("Rezervacija nije poslata!")
    })
    // console.log(this.selectedDate, this.selectedTimeFrom, this.selectedTimeTo, this.selectedTherapy);
  }
}