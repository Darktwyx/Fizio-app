import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class URLHelper {

    private baseUrl = 'http://localhost:8080/';
    public login = this.baseUrl + 'login';
    public registerUser = this.baseUrl + 'registerUser';
    public registerTherapist = this.baseUrl + 'registerTherapist';
    public loginTherapist = this.baseUrl + 'loginTherapist';
    public getTherapistReservations = this.baseUrl + 'getAllReservationsForTherapist';
    public getAllTherapistsWithTherapies = this.baseUrl + 'getAllTherapistsWithTherapies';
    public getTherapist = this.baseUrl + 'getTherapist';
    public addComment = this.baseUrl + 'addComment';
    public getAllCommentsForTherapist = this.baseUrl + 'getAllCommentsForTherapist';
    public addReservation = this.baseUrl + 'addReservation';
    public getAllReservationsForUser = this.baseUrl + 'getAllReservationsForUser';
    public getAllReservationsForTherapist = this.baseUrl + 'getAllReservationsForTherapist';
    public activateTherapist = this.baseUrl + 'activateTherapist';
    public deactivateTherapist = this.baseUrl + 'deactivateTherapist';
    public acceptReservation = this.baseUrl + 'acceptReservation';
    public denyReservation = this.baseUrl + 'denyReservation';
    public updateUser = this.baseUrl + 'updateUser';
    public updateTherapist = this.baseUrl + 'updateTherapist';
    

}