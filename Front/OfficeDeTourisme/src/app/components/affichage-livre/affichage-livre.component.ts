import { Component, OnInit } from '@angular/core';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-affichage-livre',
  templateUrl: './affichage-livre.component.html',
  styleUrls: ['./affichage-livre.component.css']
})
export class AffichageLivreComponent implements OnInit {

  constructor(private serviceLivre:LivreService) { }
  
  listeLivre:any;//déclaration de ma variable locale
  ngOnInit(): void 
  {
    this.affichageLivre();
  }
  
  //méthode GET affiche tout le contenu de la bdd
  affichageLivre()
  {
    this.serviceLivre.affichageLivre().subscribe(data=>
      {
        this.listeLivre=data;//récupération de mes data obtenue par la méthode get
        console.log(this.listeLivre);//affichage dans la console log des data
      }
      ,error => {
        console.log(error);//affichage de l'erreur
      },

      )  
  }
}