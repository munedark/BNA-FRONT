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
import { DebiteurComponent } from './debiteur/debiteur.component';


const routes: Routes = [
  {path:"ADMINISTRATEUR",
  component:AdministrateurComponent},
  {
    path:"VALIDATEUR",
    component:ValidateurComponent
  },
  {
    path:"GESTIONNAIRE",
    component:GestionnaireComponent,
    children: [
        {
          path: 'frais', 
          children: [
      {
        path: '', 
        redirectTo: 'debiteur', 
        pathMatch: 'full'
      },
      {
        path: 'debiteur', 
        component: DebiteurComponent
      },
      {
        path: 'addUser', 
        component: UserFormComponent
      }
    ]
  },
  {
    path: 'recouvrement', 
    children: [
      {
        path: '', 
        redirectTo: 'anotherComponent', 
        pathMatch: 'full'
      },
      {
        path: 'anotherComponent', 
        component: AdministrateurComponent
      },
      {
        path: 'yetAnotherComponent', 
        component: AdministrateurComponent
      }
    ]
  }
]
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
