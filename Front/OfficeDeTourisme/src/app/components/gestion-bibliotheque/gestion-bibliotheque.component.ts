import { Component, OnInit } from '@angular/core';
import { BibliothequeService } from 'src/app/services/bibliotheque.service';

@Component({
  selector: 'app-gestion-bibliotheque',
  templateUrl: './gestion-bibliotheque.component.html',
  styleUrls: ['./gestion-bibliotheque.component.css']
})
export class GestionBibliothequeComponent implements OnInit {

  constructor(private serviceBiblio:BibliothequeService) { }

  listeBibliotheque:any;//déclaration de ma varaible locale

  maBibliotheque=
  {
    id:0,
    nom:"",
    description:"",
    urlPhoto:"",
  }

  //méthode executer au chargement de la page
  ngOnInit(): void 
  {
    this.affichageBibliotheque();//appelle de ma méthode locale
  }
  
  //méthode GET affiche tout le contenu de la bdd
  affichageBibliotheque()
  {
    this.serviceBiblio.affichageBibliotheque().subscribe(data=>
      {
        this.listeBibliotheque=data;//récupération de mes data obtenue par la méthode get
        console.log(this.listeBibliotheque);//affichage dans la console log des data
      })  
  }

  //méthode POST ajout dans la bdd
  ajouterBibliotheque(NewBibliotheque:any)
  {
    let Biblio=NewBibliotheque.value;//récupération de ma bibliotheque
    this.serviceBiblio.nouvelleBibliotheque(Biblio).subscribe(data=>
      {
        console.log("bibliothèque ajouté"); 
        this.affichageBibliotheque();//appelle de ma méthode locale

      });

  }

  //1. méthode d'enregistrement de mon objet modifié
  RecuperationDonneModification(bibliotheque:any)
  {
    this.maBibliotheque=bibliotheque;//récupération de ma bibliotheque
  }

  //2. méthode PUT envoie de mon objet modifié à la bdd
  modificationBibliotheque()
  {
    this.serviceBiblio.modificationBibliotheque(this.maBibliotheque).subscribe(data=>
      {
        console.log("bibliothèque modifié");
        this.affichageBibliotheque();//réactualisation de la page

      });//sauvegarde les champs modifié

  }

  //méthode DELETE suppression d'un élément de la bdd
  suppressionProduits(bibliothequeId:any)
  {
    this.serviceBiblio.suppressionBibliotheque(bibliothequeId).subscribe(data=>
      {
        console.log("bibliothèque supprimmé")
      });
    this.affichageBibliotheque();//réactualisation de la page
  }




}
