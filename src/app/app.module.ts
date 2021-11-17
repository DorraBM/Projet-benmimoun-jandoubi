import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AccueilComponent } from './body/accueil/accueil.component';
import { ListhotelsComponent } from './body/listhotels/listhotels.component';
import { ErreurComponent } from './body/erreur/erreur.component';
import { SigninComponent } from './layout/signin/signin.component';
import { RechercheComponent } from './layout/recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ListhotelsComponent,
    ErreurComponent,
    SigninComponent,
    RechercheComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
