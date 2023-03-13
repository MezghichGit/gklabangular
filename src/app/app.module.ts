import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIngPipe } from './pipes/add-ing.pipe';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIngPipe,
    ListCandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
