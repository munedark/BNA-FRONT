import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { LoginComponent } from './login/login.component';
import { FeesComponent } from './fees/fees.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TableComponent } from './table/table.component';

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
    path:"recherche",
    component:RechercheComponent
  },
  {
    path:"table",
    component:TableComponent
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
