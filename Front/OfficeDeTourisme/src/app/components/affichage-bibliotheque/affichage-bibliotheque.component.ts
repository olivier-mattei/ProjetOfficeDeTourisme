import { Component, OnInit } from '@angular/core';
import { BibliothequeService } from 'src/app/services/bibliotheque.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-affichage-bibliotheque',
  templateUrl: './affichage-bibliotheque.component.html',
  styleUrls: ['./affichage-bibliotheque.component.css']
})
export class AffichageBibliothequeComponent implements OnInit {

  constructor(private serviceBiblio:BibliothequeService, private serviceLivre:LivreService) { }

  listeBibliotheque:any;//déclaration de ma variable locale
  listeLivreBiblio:any;
  motRecherche:any//utilisé pour la méthode de recherche
  nbrObjetRetourne:any// nombre d'objet retournée
  voirMessageTrouve:any=false;//message telle nombre de résulat trouvé
  voirMessageRienTrouve:any=false; //message erreur rien n'a était trouvé

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

  //méthode de recherche GET pour le champ nom
  rechercheParNom()
  {
    //appelle de la méthode de recherche par nom
    this.serviceBiblio.trieBibliothequeParNom(this.motRecherche).subscribe(data=>
      {
        this.listeBibliotheque=data;//récupération de mes data obtenue par la méthode get personalisé
        this.nbrObjetRetourne= this.listeBibliotheque._embedded.bibliotheques.length;
        console.log(data);
        //console.log("mot recherché: "+this.motRecherche+"\n"+this.listeBibliotheque);//affichage dans la console log des data demandé recup
        console.log("nombre de Data renvoyé: "+this.nbrObjetRetourne);
        if (this.nbrObjetRetourne>0&&this.motRecherche!=null)// SI le nbr d'objet trouvé est différent de 0 et que il y a eu une recherche alors
        {
          this.voirMessageTrouve=true;
          this.voirMessageRienTrouve=false;
          console.log("objet trouvé je suis dans le if");
        }

        else //zéro objet trouvé
        {
          this.voirMessageRienTrouve=true;
          this.voirMessageTrouve=false;
          console.log("objet non trouvé je suis dans le else");
        }
      })
  }

  rechercheLivreParBiblio(IdBiblio:any)
  {
    
    this.serviceLivre.affichageLivreParBiblioId(IdBiblio).subscribe(data=>
      {
        this.listeLivreBiblio=data;//récupération de mes data obtenue par la méthode get
        console.log(this.listeLivreBiblio);//affichage dans la console log des data
      })  
  }

  trieParPlageNombreAdherent(nbrAdherentPlage:any)
  {
    
    console.log(nbrAdherentPlage);
    // var minAdherent=nbrAdherentPlage.minAdherent;
    // var maxAdherent=nbrAdherentPlage.maxAdherent;
    var minAdherent=200;
    var maxAdherent=500;
    this.serviceBiblio.trieParPlageNombreAdherent(minAdherent,maxAdherent).subscribe(data=>
    {
        this.listeBibliotheque=data;//récupération de mes data obtenue par la méthode get
        console.log("affichage des bibliothèques ayant entre "+minAdherent+" adhérents et "+maxAdherent +" adhérents");
        console.log(this.listeBibliotheque);//affichage dans la console log des data
    })
  }

}