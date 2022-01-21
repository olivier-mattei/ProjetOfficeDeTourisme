import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // création de mon tableau local
  public UserArray = new Array
  (
    {user:"Luis", password:"123VamosALaPlaya"},
    {user:"Galaad", password:"jeSuisDansLaZone"},
    {user:"Patrick", password:"jAiPasLaClasse"},
  );

  constructor() { }
}
