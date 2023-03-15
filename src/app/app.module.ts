import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIngPipe } from './pipes/add-ing.pipe';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddIngPipe,
    ListCandidatComponent,
    ContactComponent,
    NavbarComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
