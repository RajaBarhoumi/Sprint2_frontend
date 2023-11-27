import { Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentService } from '../services/aliment.service';
import { Famille } from '../model/famille.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-aliment',
  templateUrl: './update-aliment.component.html',
})
export class UpdateAlimentComponent implements OnInit {
  currentAliment = new Aliment();

  familles!: Famille[];
  updatedFamId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alimentService: AlimentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alimentService.listeFamilles().subscribe((fams) => {
      this.familles = fams._embedded.familles;
    });
    this.alimentService
      .consulterAliment(this.activatedRoute.snapshot.params['id'])
      .subscribe((alim) => {
        this.currentAliment = alim;
        this.updatedFamId = alim.famille.idFam;
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

  onAddImageAliment() {

    console.log('uploadedImage:', this.uploadedImage);
    console.log('uploadedImage name:', this.uploadedImage ? this.uploadedImage.name : 'undefined');
    console.log('currentAliment:', this.currentAliment);
    console.log('currentAliment idAliment:', this.currentAliment ? this.currentAliment.idAliment : 'undefined');
    
    this.alimentService
      .uploadImageAlim(
        this.uploadedImage,
        this.uploadedImage.name,
        this.currentAliment.idAliment!
      )
      .subscribe((img: Image) => {
        this.currentAliment.images.push(img);
      });

      
  }

  supprimerImage(img: Image) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.alimentService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentAliment.images.indexOf(img, 0);
        if (index > -1) {
          this.currentAliment.images.splice(index, 1);
        }
      });
  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }
}
