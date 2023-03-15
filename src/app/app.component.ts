import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ams';
  logo='https://i.twic.pics/v1/contain=490x280/https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/logos/formation/122271565658ff1952bcf76.jpg'
  formation = 'AMS Angular GK';

  candidats:string[]=["olivier","nicolas","alex","amine"];

  display()
  {
      alert("Hello from Angular");
  }

  processEvent(message :any) {
    alert("Message du fils est : " + message);
    //console.log("Ok");
  }

}
