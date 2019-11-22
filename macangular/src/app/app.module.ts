import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComputerComponent } from './computer/computer.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    NavigationComponent,
    ComputerComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
