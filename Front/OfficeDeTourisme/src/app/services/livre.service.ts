import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class LivreService 
{

  constructor(private http:HttpClient) { }

  url:any="http://localhost:8082/livres";
  affichageLivre()
  {
    return this.http.get(this.url);
  }

  affichageLivreParBiblioId(monIdBiblio:any)
  {
    console.log("mon id "+monIdBiblio)
    return this.http.get("http://localhost:8082/bibliotheques/"+monIdBiblio+"/livres");
  }
}
