import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OfficeDeTourisme';

  //création de mon boolean
  Admin: boolean = false;
  PasConnecter: boolean = true;

  ngOnInit(): void 
  {
    this.testConnecter(); //appelle de ma méthode permettant de voir si l'utilisateur est connecté
  }

  testConnecter()
  {
    ///récupération des Stockage de Session///
    let objectSesion=JSON.parse(sessionStorage.getItem("object")||'{}')

    let role= objectSesion.role;
    let user =objectSesion.user;
    //si connecter 
    if(user!=null&&role!=null)
    {
      this.PasConnecter=false;//fait disparaitre la page de connection dans la NavBar
      if(role=="admin")//si je suis un admin
      {
        this.Admin=true; //fait apparaitre la page de getionaire administrateur dans la NavBar
        alert("Bienvenue administrateur "+ user);
      }
      
  
      else //si je suis un autre utilisateur 
      {
        alert("Bienvenue utilisateur "+ user);
      }
    }
  }

  deconnectionUtilisateur()
  {    
    // Supprimer toutes les données de sessionStorage
    console.log("demande de deconnection");
    sessionStorage.clear();
    location.replace('http://localhost:4200/affichage-bibliotheque');
    alert("Vous êtes désormais déconnecter");
  }

}
