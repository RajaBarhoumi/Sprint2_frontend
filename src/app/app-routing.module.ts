import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';
import { AddAlimentsComponent } from './add-aliments/add-aliments.component';
import { UpdateAlimentComponent } from './update-aliment/update-aliment.component';
import { RecherecheParFamilleComponent } from './rechereche-par-famille/rechereche-par-famille.component';
import { RecherecheParNomComponent } from './rechereche-par-nom/rechereche-par-nom.component';
import { ListeFamillesComponent } from './liste-familles/liste-familles.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: "aliments", component : AlimentsComponent},
  {path: "add-aliment", component : AddAlimentsComponent},
  {path: "updateAliment/:id", component : UpdateAlimentComponent},
  {path: "rechercheParFamille", component : RecherecheParFamilleComponent},
  {path: "rechercheParNom", component : RecherecheParNomComponent},
  {path: "listeFamilles", component : ListeFamillesComponent},
  {path: 'login', component: LoginComponent},

  { path: "", redirectTo: "aliments", pathMatch: "full" }


  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
