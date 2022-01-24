import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // création de mon tableau local
  public UserArray = new Array
  (
    {user:"Olivier", password:"HelloWorld!" ,role:"admin"},
    {user:"Luis", password:"123VamosALaPlaya" ,role:"user"},
    {user:"Galaad", password:"jeSuisDansLaZone",role:"user"},
    {user:"Patrick", password:"jAiPasLaClasse",role:"user"},
  );

  constructor() { }
}
