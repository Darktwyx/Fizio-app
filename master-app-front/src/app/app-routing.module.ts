import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { AddArrangementComponent } from './components/dashboard/add-arrangement/add-arrangement.component';
import { AllReservationsComponent } from './components/dashboard/all-reservations/all-reservations.component';
import { FirstPageComponent } from './components/dashboard/first-page/first-page.component';
import { RegisterTherapistComponent } from './components/register-therapist/register-therapist.component';
import { CreateReservationComponent } from './components/dashboard/create-reservation/create-reservation.component';
import { TherapistDetailComponent } from './components/dashboard/therapist-detail/therapist-detail.component';
import { TherapistLogInComponent } from './components/therapist-log-in/therapist-log-in.component';
import { LoggedGuard } from './guards/logged.guard';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [LoggedGuard],
    canActivateChild:[LoggedGuard],
    children: [
      { path: 'navbar', component: NavbarComponent },
      { path: 'addArrangement', component: AddArrangementComponent},
      { path: 'allReservations', component: AllReservationsComponent},
      { path: 'firstPage', component: FirstPageComponent},
      { path: 'create-reservation', component: CreateReservationComponent },
      { path: 'therapist/:therapist_id', component: TherapistDetailComponent },
      { path: 'edit', component: EditProfileComponent }
    ]
  },
  { path: 'log-in', component: LogInComponent },
  { path: 'therapist-log-in', component: TherapistLogInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'register-therapist', component: RegisterTherapistComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LogInComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
