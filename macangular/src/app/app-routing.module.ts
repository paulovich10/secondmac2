import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComputerComponent } from './computer/computer.component';



const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'registration', component: RegistrationComponent, children: [
      { path: '', component: ComputerComponent },
      {
        path: 'computer', component: ComputerComponent, children: [
          { path: 'usuario', component: UsuarioComponent }
        ]
      },
      { path: 'usuario', component: UsuarioComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }