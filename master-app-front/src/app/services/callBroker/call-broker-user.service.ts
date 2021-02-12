import { HttpClient } from '@angular/common/http';
import { URLHelper } from '../url-helpers/routes.constants';
import { Injectable } from '@angular/core';
import { Therapy } from 'src/app/models/Therapy.model';

@Injectable({
    providedIn: 'root'
})

export class CallBrokerUser {

    constructor(private http: HttpClient, private urlHelper: URLHelper) { }

    login(email: string, password: string) {


        let data = {
            "email": email,
            "password": password
        }

        return this.http.post(this.urlHelper.login, data);

    }

    registerUser(name: string, lastname: string, email: string, password: string, phoneNumber: number) {
        let data = {
            "name": name,
            "lastname": lastname,
            "email": email,
            "password": password,
            "phoneNumber": phoneNumber

        }


        return this.http.post(this.urlHelper.registerUser, data);
    }
    updateUser(user) {
        return this.http.put(this.urlHelper.updateUser, user);
    }
}
