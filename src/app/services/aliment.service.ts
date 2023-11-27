import { Injectable } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { Famille } from '../model/famille.model';
import { Image } from '../model/image.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FamilleWrapper } from '../model/famillesWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  apiURL: string = 'http://localhost:8081/aliments/api';

  apiURLFam: string = 'http://localhost:8081/aliments/fam';

  aliments!: Aliment[];
  familles!: Famille[];

  constructor(private http: HttpClient, private authService: AuthService) {
    console.log('Creation de service aliments');

    /*
    this.familles = [
      { idFam: 1, nomFam: 'Fruits' },
      { idFam: 2, nomFam: 'Légumes' },
    ];

    this.aliments = [
      {
        idAliment: 1,
        nomAliment: 'Pain',
        glucideAliment: 25,
        lipideAliment: 30,
        proteineAliment: 50,
        calorieAliment: 50,
        fibreAliment: 70,
        dateCreation: new Date('01/14/2011'),
        famille: { idFam: 1, nomFam: 'Fruits' },
      },
      {
        idAliment: 2,
        nomAliment: 'Chocolat',
        glucideAliment: 5,
        lipideAliment: 20,
        proteineAliment: 40,
        calorieAliment: 30,
        fibreAliment: 30,
        dateCreation: new Date('01/14/2011'),
        famille: { idFam: 2, nomFam: 'Légumes' },
      },
      {
        idAliment: 3,
        nomAliment: 'Banane',
        glucideAliment: 80,
        lipideAliment: 10,
        proteineAliment: 30,
        calorieAliment: 40,
        fibreAliment: 20,
        dateCreation: new Date('01/14/2011'),
        famille: { idFam: 3, nomFam: 'Sucrerie' },
      },
    ];
    */
  }

  listeFamilles(): Observable<FamilleWrapper> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<FamilleWrapper>(this.apiURLFam, {
      headers: httpHeaders,
    });
  }

  listeAliments(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>(this.apiURL + '/all');
  }
  ajouterAliment(alim: Aliment): Observable<Aliment> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Aliment>(this.apiURL + '/addalim', alim, {
      headers: httpHeaders,
    });
  }

  supprimerAliment(id: number) {
    const url = `${this.apiURL}/delalim/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }

  consulterAliment(id: number): Observable<Aliment> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Aliment>(url, { headers: httpHeaders });
  }

  trierAliments() {
    this.aliments = this.aliments.sort((n1, n2) => {
      if (n1.idAliment! > n2.idAliment!) {
        return 1;
      }
      if (n1.idAliment! < n2.idAliment!) {
        return -1;
      }
      return 0;
    });
  }

  updateAliment(alim: Aliment): Observable<Aliment> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put<Aliment>(this.apiURL + '/updatealim', alim, {
      headers: httpHeaders,
    });
  }

  rechercherParFamille(idFam: number): Observable<Aliment[]> {
    const url = `${this.apiURL}/alimentsFam/${idFam}`;
    return this.http.get<Aliment[]>(url);
  }

  rechercherParNom(nom: string): Observable<Aliment[]> {
    const url = `${this.apiURL}/alimentsByName/${nom}`;
    return this.http.get<Aliment[]>(url);
  }

  ajouterFamille(fam: Famille): Observable<Famille> {
    return this.http.post<Famille>(this.apiURLFam, fam, httpOptions);
  }

  uploadImage(file: File, filename: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
  }
  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImageAlim(
    file: File,
    filename: string,
    idAlim: number
  ): Observable<any> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uplaodImageAlim'}/${idAlim}`;
    return this.http.post(url, imageFormData);
  }

  supprimerImage(id: number) {
    const url = `${this.apiURL}/image/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }

  

  uploadImageFS(file: File, filename: string, idAlim : number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uploadFS'}/${idAlim}`;
    return this.http.post(url, imageFormData);
    }

}
