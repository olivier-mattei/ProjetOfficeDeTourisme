import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {

  constructor(private http:HttpClient) { }

  url:any="http://localhost:8082/bibliotheques";

  affichageBibliotheque()
  {
    return this.http.get(this.url);
  }

  nouvelleBibliotheque(bibliotheque:any) //ajout d'une bibliothèque
  {
    return this.http.post(this.url,bibliotheque);
  }

  modificationBibliotheque(bibliotheque:any)//modification d'une bibliothèque existante
  {
    return this.http.put(this.url+"/"+bibliotheque.id,bibliotheque);
  }

  suppressionBibliotheque(bibliothequeId:any)
  {
    return this.http.delete(this.url+"/"+bibliothequeId);//suppression d'une bibliothèque
  }

  trieBibliothequeParNom(motRecherche:any)
  {
    return this.http.get(this.url+"/search/searchByName?nom="+motRecherche);//fais une recherche par nom
  }

  trieParPlageNombreAdherent(minAdherent:any,maxAdherent:any)
  {  
    return this.http.get(this.url+"/search/sarchBynbrAdherent?minNbrAdherent="+minAdherent+"&&maxNbrAdherent="+maxAdherent) //renvoie les bibliothèques avec les nombres d' adhérent compris dans la plage demandé
  }

}
