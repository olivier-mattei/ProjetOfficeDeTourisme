import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  constructor(private ServiceLogin:LoginService,private router:Router) { }

  ngOnInit(): void 
  {
    
  }

  testConnexion(NewLogin:any)
  {
    console.log("data receive:");
    console.log(NewLogin.value);
    for(var iter=0;this.ServiceLogin.UserArray.length>iter;iter++)
    {
      let LoginArray=this.ServiceLogin.UserArray;
      let Password=NewLogin.value.password;
      let User=NewLogin.value.user;
      let Role;
      
      //test d'égalité
      if (User==LoginArray[iter].user&& Password==LoginArray[iter].password)//parcour le tableau ligne par ligne
      {
        console.log("connexion réussi pour l'index "+iter);
        Role=LoginArray[iter].role; //récupération du rôle de mon utilisateur

        // Enregistrement des données dans sessionStorage
        sessionStorage.setItem("object",JSON.stringify(LoginArray[iter])) //création d'un objet

        location.replace('http://localhost:4200/affichage-bibliotheque');
      }
      
      else
      {
        console.log("c'est pas la ligne "+ iter);
      }
    }
  }
}