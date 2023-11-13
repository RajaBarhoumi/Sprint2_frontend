import { Injectable } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { Famille } from '../model/famille.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FamilleWrapper } from '../model/famillesWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  apiURL: string = 'http://localhost:8081/aliments/api';

  apiURLFam: string = 'http://localhost:8081/aliments/fam';

  aliments: Aliment[];
  familles: Famille[];

  constructor(private http: HttpClient) {
    console.log('Creation de service aliments');

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
  }

  listeFamilles(): Observable<FamilleWrapper> {
    return this.http.get<FamilleWrapper>(this.apiURLFam);
  }

  listeAliments(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>(this.apiURL);
  }
  ajouterAliment(alim: Aliment): Observable<Aliment> {
    return this.http.post<Aliment>(this.apiURL, alim, httpOptions);
  }

  supprimerAliment(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterAliment(id: number): Observable<Aliment> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Aliment>(url);
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
    return this.http.put<Aliment>(this.apiURL, alim, httpOptions);
  }

  rechercherParFamille(idFam: number): Observable<Aliment[]> {
    const url = `${this.apiURL}/alimentsFam/${idFam}`;
    return this.http.get<Aliment[]>(url);
  }

  rechercherParNom(nom: string): Observable<Aliment[]> {
    const url = `${this.apiURL}/alimentsByName/${nom}`;
    return this.http.get<Aliment[]>(url);
  }

  ajouterFamille( fam: Famille):Observable<Famille>{
    return this.http.post<Famille>(this.apiURLFam, fam, httpOptions);
    }

    
}
