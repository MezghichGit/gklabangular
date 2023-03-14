import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formation:string="Angular";

  handleMyForm(myform:any){
    //alert(myform.value.nom+" "+myform.value.email+" "+myform.value.message);
    console.log(myform);
  }

}
