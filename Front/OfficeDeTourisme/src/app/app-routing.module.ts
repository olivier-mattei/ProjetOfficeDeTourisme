import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageBibliothequeComponent } from './components/affichage-bibliotheque/affichage-bibliotheque.component';
import { GestionBibliothequeComponent } from './components/gestion-bibliotheque/gestion-bibliotheque.component';
import {AffichageLivreComponent} from './components/affichage-livre/affichage-livre.component';

const routes: Routes = [
  {path:'', component: AffichageBibliothequeComponent},//racine de mon application
  {path:'affichage-bibliotheque', component: AffichageBibliothequeComponent},//chemin vers mon composants affichage-bibliotheque
  {path:'gestion-bibliotheque',component: GestionBibliothequeComponent},//chemin vers mon composants gestion-bibliotheque
  {path:'affichage-livre',component: AffichageLivreComponent},//chemin vers mon composants affichage-livre
  {path:'**', component: AffichageBibliothequeComponent},//représente toutes les urls n’existants pas dans la liste des routes donnée


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
