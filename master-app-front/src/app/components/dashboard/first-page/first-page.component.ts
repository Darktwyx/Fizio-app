import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  user;
  constructor() {
    const sessionStorageUser = sessionStorage.getItem('user');
    if (sessionStorageUser !== null) {
      this.user = JSON.parse(sessionStorageUser);
    }
  }

  ngOnInit() {
  }

}
