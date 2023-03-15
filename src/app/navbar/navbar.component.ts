import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() projectName:any;
  @Output() eventToSend = new EventEmitter();


  constructor(public loginService: AuthenticationService) { }

  sendEvent() {
    alert("OK")
    this.eventToSend.emit("Angular is good, By GK");
  }

}
