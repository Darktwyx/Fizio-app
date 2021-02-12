import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLHelper } from '../url-helpers/routes.constants';

@Injectable({
  providedIn: 'root'
})
export class CallBrokerReservationService {

  constructor(private http: HttpClient, private urlHelper: URLHelper) { }
  
  addReservation(reservation) {
    return this.http.post(this.urlHelper.addReservation, reservation);
  }
  getAllReservationsForUser(user_id) {
    return this.http.get(this.urlHelper.getAllReservationsForUser + '/' + user_id);
  }
  acceptReservation(reservation_id){
    return this.http.put(this.urlHelper.acceptReservation, {
      reservation_id:reservation_id
    });
  }
  denyReservation(reservation_id){
    return this.http.put(this.urlHelper.denyReservation, {
      reservation_id:reservation_id
    });
  }
}
