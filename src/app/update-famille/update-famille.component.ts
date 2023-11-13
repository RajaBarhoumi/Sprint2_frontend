import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Famille } from '../model/famille.model';

@Component({
  selector: 'app-update-famille',
  templateUrl: './update-famille.component.html',
})
export class UpdateFamilleComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateFamille ', this.famille);
  }

  @Input()
  famille!: Famille;
  @Output()
  familleUpdated = new EventEmitter<Famille>();

  @Input()
ajout!:boolean;


  saveFamille(){
    this.familleUpdated.emit(this.famille);
    }

    

      

    
}
