import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageBibliothequeComponent } from './components/affichage-bibliotheque/affichage-bibliotheque.component';
import { GestionBibliothequeComponent } from './components/gestion-bibliotheque/gestion-bibliotheque.component';
import { FormsModule } from '@angular/forms';
import { AffichageLivreComponent } from './components/affichage-livre/affichage-livre.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AffichageBibliothequeComponent,
    GestionBibliothequeComponent,
    AffichageLivreComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
