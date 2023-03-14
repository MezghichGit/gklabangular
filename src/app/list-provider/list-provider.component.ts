import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit{

  providers:any;
  constructor(private providerService:ProviderService, private router:Router){

  }
  public ngOnInit(): void {
    this.refresh()
  }

  deleteProvider(id:any){
    this.providerService.deleteProvider(id).subscribe(
      data=>this.refresh()
    );
  }

  refresh(){
    this.providerService.getAllProvider().subscribe(
      data=>{
        //console.log(data)
        this.providers = data
      })
  }
  updateProvider(id:any){
     this.router.navigate(["updateProvider/"+id]);
  }
}
