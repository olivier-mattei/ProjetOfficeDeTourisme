import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  constructor(private ServiceLogin:LoginService) { }

  ngOnInit(): void 
  {

  }

  testConnexion(NewLogin:any)
  {
    console.log("data receive:");
    console.log(NewLogin.value);
    for(var iter=0;this.ServiceLogin.UserArray.length>iter;iter++)
    {
      var LoginArray=this.ServiceLogin.UserArray;
      
      //test d'égalité
      if (NewLogin.value.user==LoginArray[iter].user&& NewLogin.value.password==LoginArray[iter].password)
      {
        console.log("connexion réussi pour l'index "+iter);
      }
      
      else
      {
        console.log("c'est pas la ligne "+ iter);
      }
    }
  }
}