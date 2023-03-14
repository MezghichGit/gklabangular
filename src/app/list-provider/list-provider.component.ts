import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit{

  providers:any;
  constructor(private providerService:ProviderService){

  }

  public ngOnInit(): void {
    this.providerService.getAllProvider().subscribe(
      data=>console.log(data)
    );
  }

}
