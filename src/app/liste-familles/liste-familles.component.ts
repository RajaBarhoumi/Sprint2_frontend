import { Component, OnInit } from '@angular/core';
import { Famille } from '../model/famille.model';
import { AlimentService } from '../services/aliment.service';

@Component({
  selector: 'app-liste-familles',
  templateUrl: './liste-familles.component.html',
  styleUrls: ['./liste-familles.component.css'],
})
export class ListeFamillesComponent implements OnInit {
  familles!: Famille[];
  ajout:boolean=true;


  updatedFam: Famille = { idFam: 0, nomFam: '' };
  constructor(private alimentService: AlimentService) {}

  ngOnInit(): void {
    this.alimentService.listeFamilles().subscribe((fams) => {
      this.familles = fams._embedded.familles;
      console.log(fams);
    });
  }

  chargerFamilles(){
    this.alimentService.listeFamilles().
    subscribe(fams => {this.familles = fams._embedded.familles;
    console.log(fams);
    });
    }

    updateFam(fam:Famille) {
      this.updatedFam=fam;
this.ajout=false; 
      }
      
    

  

  familleUpdated(fam:Famille){
    console.log("Cat updated event",fam);
    this.alimentService.ajouterFamille(fam).
     subscribe( ()=> this.chargerFamilles());
    }
    
}
