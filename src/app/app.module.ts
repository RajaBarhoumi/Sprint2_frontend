import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlimentsComponent } from './aliments/aliments.component';
import { AddAlimentsComponent } from './add-aliments/add-aliments.component';
import { UpdateAlimentComponent } from './update-aliment/update-aliment.component';
import { RecherecheParFamilleComponent } from './rechereche-par-famille/rechereche-par-famille.component';
import { RecherecheParNomComponent } from './rechereche-par-nom/rechereche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeFamillesComponent } from './liste-familles/liste-familles.component';
import { UpdateFamilleComponent } from './update-famille/update-famille.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    AlimentsComponent,
    AddAlimentsComponent,
    UpdateAlimentComponent,
    RecherecheParFamilleComponent,
    RecherecheParNomComponent,
    SearchFilterPipe,
    ListeFamillesComponent,
    UpdateFamilleComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule

    
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
