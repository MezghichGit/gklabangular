import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {
  provider:any;
  constructor(private providerService:ProviderService, private router:Router){
  }
  addProvider(myProvider:any){
    this.providerService.addProvider(myProvider.value).subscribe(
      data=>{
        this.router.navigate(["listProviders"]);
        //console.log(data)
      }
    );

  }

}
