import { Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { Famille } from '../model/famille.model';
import { AlimentService } from '../services/aliment.service';

@Component({
  selector: 'app-rechereche-par-famille',
  templateUrl: './rechereche-par-famille.component.html',
})
export class RecherecheParFamilleComponent implements OnInit{

  aliments! : Aliment[];
  IdFamille! : number;
  familles! : Famille[];
  constructor(private alimentService: AlimentService) {}

  onChange() {
    this.alimentService.rechercherParFamille(this.IdFamille).
    subscribe(alims =>{this.aliments=alims});
    }
    


  ngOnInit(): void {
    this.alimentService.listeFamilles().
    subscribe(fams => {this.familles = fams._embedded.familles;
    console.log(fams);
    });
    }
    

 


}
