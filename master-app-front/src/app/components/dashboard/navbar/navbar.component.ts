import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LogInComponent } from '../../log-in/log-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  subscription: Subscription;
  activeTab = 'navItem1';
  user;
  constructor(private router: Router) {
    const sessionStorageUser = sessionStorage.getItem('user');
    if (sessionStorageUser !== null) {
      this.user = JSON.parse(sessionStorageUser);
      console.log(this.user)
    }
  }
  // constructor(private renderer: Renderer2, private el: ElementRef,
  //   private messageService: MessageServiceService) {
  //   this.subscription = this.messageService.getMessage().subscribe(message => {
  //     console.log(message.text);
  //     switch (message.text) {
  //       case 'navItem1': this.activeTab = message.text; break;
  //       case 'navItem2': this.activeTab = message.text; break;
  //       case 'navItem3': this.activeTab = message.text; break;
  //       default: this.activeTab = 'navItem1';
  //     }
  //   });


  ngOnInit() {

    // this.renderer.setStyle(document.body, 'background-image',
    //   'url(https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)');

    // this.renderer.setStyle(document.body, ' background-size', 'cover');
  }


  changeActiveTab1(event: any) {
    this.activeTab = event.srcElement.parentElement.id.toString();
    this.router.navigate(['/dashboard/firstPage']);
    console.log(this.activeTab)
  }

  changeActiveTab2(event: any) {
    this.activeTab = event.srcElement.parentElement.id.toString();
    this.router.navigate(['/dashboard/allReservations']);
  }

  changeActiveTab3(event: any) {
    this.activeTab = event.srcElement.parentElement.id.toString();
    this.router.navigate(['/dashboard/therapist']);
  }

  changeActiveTab4(event: any) {
    this.activeTab = event.srcElement.parentElement.id.toString();
    this.router.navigate(['/dashboard/allReservations']);
  }

  logout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/login']);
  }

}
