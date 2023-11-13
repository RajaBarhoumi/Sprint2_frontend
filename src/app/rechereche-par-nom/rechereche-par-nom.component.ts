import { Component, OnInit } from '@angular/core';
import { AlimentService } from '../services/aliment.service';
import { Aliment } from '../model/aliment.model';

@Component({
  selector: 'app-rechereche-par-nom',
  templateUrl: './rechereche-par-nom.component.html',
})
export class RecherecheParNomComponent implements OnInit{
  nomAliment!: string;
  aliments!: Aliment[];
  allAliments! : Aliment[];
searchTerm!: string;


  constructor(private alimentService: AlimentService) {}

  ngOnInit(): void {
    this.alimentService.listeAliments().subscribe(alims => {
console.log(alims);
this.aliments = alims;
});

  }

  onKeyUp(filterText : string){
    this.aliments = this.allAliments.filter(item =>
    item.nomAliment!.toLowerCase().includes(filterText));
    }

  rechercherAliments() {
    this.alimentService.rechercherParNom(this.nomAliment).subscribe((alims) => {
      this.aliments = alims;
      console.log(alims);
    });
  }
}
