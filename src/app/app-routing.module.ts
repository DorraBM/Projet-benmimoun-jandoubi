import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './body/accueil/accueil.component';
import { ListhotelsComponent } from './body/listhotels/listhotels.component';
import { ErreurComponent } from './body/erreur/erreur.component';
import { SigninComponent } from './layout/signin/signin.component';


const routes:Routes =[ 
  {path:'accueil', component:AccueilComponent}, 
  {path:'hotels', component:ListhotelsComponent},
  {path:'signin', component:SigninComponent},
   {path:'', redirectTo:'accueil', pathMatch:'full'} ,
   {path:'**', component:ErreurComponent}, 
] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
