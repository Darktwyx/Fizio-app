import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLHelper } from '../url-helpers/routes.constants';

@Injectable({
  providedIn: 'root'
})
export class CallBrokerTherapistService {

  constructor(private http: HttpClient, private urlHelper: URLHelper) { }



  registerTherapist(name: string, lastname: string, email: string, phoneNumber: number, description: string, therapies: number[], password: string) {

    let data = {
      "name": name,
      "lastname": lastname,
      "email": email,
      "phoneNumber": phoneNumber,
      "description": description,
      "therapies": therapies,
      "password": password
    }


    return this.http.post(this.urlHelper.registerTherapist, data);
  }

  loginTherapist(email, password) {


    let data = {
      "email": email,
      "password": password
    }

    return this.http.post(this.urlHelper.loginTherapist, data);
  }
  getAllTherapistReservations() {
    let therapist = JSON.parse(sessionStorage.getItem('user'))
    return this.http.get(this.urlHelper.getTherapistReservations + '/' + therapist.therapist_id);
  }
  getAllTherapistsWithTherapies() {
    return this.http.get(this.urlHelper.getAllTherapistsWithTherapies);
  }
  getTherapist(therapist_id) {
    return this.http.get(`${this.urlHelper.getTherapist}/${therapist_id}`);
  }
  addComment(comment) {
    return this.http.post(this.urlHelper.addComment, comment);
  }
  getAllCommentsForTherapist(therapist_id) {
    return this.http.get(`${this.urlHelper.getAllCommentsForTherapist}/${therapist_id}`);
  }
  activateTherapist(therapist_id) {
    return this.http.put(`${this.urlHelper.activateTherapist}`, {
      therapist_id: therapist_id
    });
  }
  deactivateTherapist(therapist_id) {
    return this.http.put(`${this.urlHelper.deactivateTherapist}`, {
      therapist_id: therapist_id
    });
  }
  updateTherapist(therapist){
    return this.http.put(this.urlHelper.updateTherapist, therapist);
}
}
