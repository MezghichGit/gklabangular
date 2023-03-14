import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  { path: 'addProvider', component: AddProviderComponent },
  { path: 'listProviders', component: ListProviderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'updateProvider/:id', component: UpdateProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
