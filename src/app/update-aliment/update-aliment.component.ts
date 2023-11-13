import { Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentService } from '../services/aliment.service';
import { Famille } from '../model/famille.model';

@Component({
  selector: 'app-update-aliment',
  templateUrl: './update-aliment.component.html',
})
export class UpdateAlimentComponent implements OnInit {
  currentAliment = new Aliment();

  familles!: Famille[];
  updatedFamId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alimentService: AlimentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alimentService.listeFamilles().subscribe((fams) => {
      console.log(fams);
      this.familles = fams._embedded.familles;
    });
    this.alimentService
      .consulterAliment(this.activatedRoute.snapshot.params['id'])
      .subscribe((alim) => {
        this.currentAliment = alim;
        this.updatedFamId = this.currentAliment.famille.idFam;
      });
  }

  updateAliment() {
    this.currentAliment.famille = this.familles.find(
      (fam) => fam.idFam == this.updatedFamId
    )!;
    this.alimentService.updateAliment(this.currentAliment).subscribe((alim) => {
      this.router.navigate(['aliments']);
    });
  }
}
