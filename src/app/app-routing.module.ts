import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: "**", pathMatch: "full", redirectTo: "app-navbar" },
  { path: 'addProvider', component: AddProviderComponent, canActivate:  [() => inject(AuthGaurdService).canActivate()] },
  { path: 'listProviders', component: ListProviderComponent, canActivate:  [() => inject(AuthGaurdService).canActivate()] },
  { path: 'contact', component: ContactComponent },
  { path: 'updateProvider/:id', component: UpdateProviderComponent, canActivate:  [() => inject(AuthGaurdService).canActivate()] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistrationComponent},
  { path: 'logout', component: LogoutComponent, canActivate:  [() => inject(AuthGaurdService).canActivate()] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


