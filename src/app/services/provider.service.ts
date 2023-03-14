import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl=environment.providerUrl;

  constructor(private http:HttpClient) { }

  getAllProvider(){
    return this.http.get(this.baseUrl+"list");
  }

  addProvider(provider:any){
    return this.http.post(this.baseUrl+"add",provider);
  }

  deleteProvider(id:any){
    return this.http.delete(this.baseUrl+id);
  }

  updateProvider(id:any, provider:any){
    return this.http.put(this.baseUrl+id,provider);
  }
}
