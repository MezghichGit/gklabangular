import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit{
  id:any;
  name:any;
  email:any;
  address:any;
  constructor(private providerService:ProviderService,
    private activateRoute: ActivatedRoute,
    private router:Router)
  {

  }

  public ngOnInit(): void {
     this.activateRoute.params.subscribe(
        params=>{
          this.id = params["id"];
          this.providerService.getProvider(this.id).subscribe(
            (data:any)=>{
              this.name = data["name"];
              this.email = data["email"];
              this.address = data["address"];
            }
          );
        }
      );
  }

  updateProvider(){

    this.providerService.updateProvider(this.id,{"name":this.name,"email":this.email, "address":this.address}).subscribe(
      data=>
      this.router.navigate(["listProviders"])
    );
  }

}
