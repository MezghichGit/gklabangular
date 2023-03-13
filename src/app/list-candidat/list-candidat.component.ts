import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../Model';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit{

  mesCandidats:any;
  //injection de dépendances
  constructor(private service:CandidatService) {
    console.log("Constructeur");
   }
  // fonction qui sera exécutée juste après le constructeur
  ngOnInit(){
    console.log("ngOnInit");
    this.service.getData().subscribe(
      data =>{
        //console.log(data);
        this.mesCandidats = data;
      }
    );
  }

  stagiaires: Stagiaire[] = [
    {
      "nom": "Alex",
      "email": "alex@gmail.com",
      "age": 22
    },
    {
      "nom": "Amine",
      "email": "amine@gmail.com",
      "age": 23
    },
    {
      "nom": "Alex",
      "email": "olivier@gmail.com",
      "age": 21
    }
  ];

}
