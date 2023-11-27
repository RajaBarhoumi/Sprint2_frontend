import { Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { Image } from '../model/image.model';
import { AlimentService } from '../services/aliment.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css'],
})
export class AlimentsComponent implements OnInit {
  aliments?: Aliment[];
  apiurl:string='http://localhost:8081/aliments/api';

  ngOnInit(): void {
    this.chargerAliments();
      
  }

  constructor(private alimentService : AlimentService,
    public authService: AuthService) { }

  chargerAliments(){
    this.alimentService.listeAliments().subscribe(alims => {
      this.aliments = alims;
      });
      
    }

  supprimerAliment(a: Aliment)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.alimentService.supprimerAliment(a.idAliment!).subscribe(() => {
console.log("produit supprimé");
this.chargerAliments();
});
}
}
