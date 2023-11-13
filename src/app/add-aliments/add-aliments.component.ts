import { Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { AlimentService } from '../services/aliment.service';
import { Router } from '@angular/router';
import { Famille } from '../model/famille.model';

@Component({
  selector: 'app-add-aliments',
  templateUrl: './add-aliments.component.html',
  styleUrls: ['./add-aliments.component.css'],
})
export class AddAlimentsComponent implements OnInit {
  newAliment = new Aliment();

  message?: string;

  familles!: Famille[];
  newIdFam!: number;
  newFamille!: Famille;

  constructor(private alimentService: AlimentService, private router: Router) {}

  addAliment() {
    this.newAliment.famille = this.familles.find(
      (fam) => fam.idFam == this.newIdFam
    )!;
    this.alimentService.ajouterAliment(this.newAliment).subscribe((alim) => {
      console.log(alim);
      this.router.navigate(['aliments']);
    });
  }

  ngOnInit(): void {
    this.alimentService.listeFamilles().subscribe((fams) => {
      console.log(fams);
      this.familles = fams._embedded.familles;
    });
  }
}
