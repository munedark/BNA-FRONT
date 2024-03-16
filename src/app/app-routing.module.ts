import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { LoginComponent } from './login/login.component';
import { FeesComponent } from './fees/fees.component';

const routes: Routes = [
  {path:"ADMINISTRATEUR",
  component:AdministrateurComponent},
  {
    path:"VALIDATEUR",
    component:ValidateurComponent
  },
  {
    path:"GESTIONNAIRE",
    component:GestionnaireComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"addfees",
    component:FeesComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
