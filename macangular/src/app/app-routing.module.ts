import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ComputerRegComponent } from './computer-reg/computer-reg.component';
import { UserRegComponent } from './user-reg/user-reg.component';



const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'registration', component: RegistrationComponent,
    children: [
      { path: 'computer-reg', component: ComputerRegComponent },
      { path: 'user-reg', component: UserRegComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }