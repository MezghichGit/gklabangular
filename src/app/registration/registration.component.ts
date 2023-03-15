import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
    // gestion de nos FormControl
    this.usernameCtrl = fb.control("");
    this.passwordCtrl = fb.control("");


    this.userForm = fb.group({  // le mapping entre les input et les FormControl
       username: this.usernameCtrl,
       password: this.passwordCtrl
   });
 }

 reset(): void {
  this.usernameCtrl.setValue("");
  this.passwordCtrl.setValue("");
}
register(): void {
  console.log(this.userForm.value);
}



}
