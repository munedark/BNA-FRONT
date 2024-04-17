import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { LoginComponent } from './login/login.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DebiteurComponent } from './debiteur/debiteur.component';
import { FraisGenerauxComponent } from './frais-generaux/frais-generaux.component';
import { ConsultationOperationComponent } from './consultation-operation/consultation-operation.component';
import { ConsultationDebiteurComponent } from './consultation-debiteur/consultation-debiteur.component';
import { FraisInitiesContentieuxComponent } from './frais-inities-contentieux/frais-inities-contentieux.component';


const routes: Routes = [
  {path:"ADMINISTRATEUR",
  component:AdministrateurComponent,
  children: [
    {
      path:'',
      redirectTo: 'frais',
      pathMatch:'full'
    },
    {
      path: 'Gestion_agent', 
      children: [
                    {
                      path: '', 
                      redirectTo: 'pec-frais-contentieux', 
                      pathMatch: 'full'
                    },
                    {
                      path:'ajout',
                      component: UserFormComponent
                    },
                    {
                      path: 'supprimer', 
                      component: DebiteurComponent
                    },
                    {
                      path: 'modifier', 
                      component: FraisGenerauxComponent
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
                      path: 'blabla', 
                      component: AdministrateurComponent
                    },
                    {
                      path: 'blabla', 
                      component: AdministrateurComponent
                    }
  ]
},
{
  path: 'consultation', 
  children: [
                    {
                      path: '', 
                      redirectTo: 'anotherComponent', 
                      pathMatch: 'full'
                    },
                    {
                      path: 'liste-operations', 
                      component: ConsultationOperationComponent
                    },
                    {
                      path: 'liste-debiteurs', 
                      component: ConsultationDebiteurComponent
                    }
  ]
}
]},
  {
    path:"VALIDATEUR",
    component:ValidateurComponent,
    children: [
      {
        path:'',
        redirectTo: 'frais',
        pathMatch:'full'
      },
      {
        path: 'frais', 
        children: [
                      {
                        path: '', 
                        redirectTo: 'pec-frais-contentieux', 
                        pathMatch: 'full'
                      },
                      {
                        path:'pec-frais-contentieux',
                        component: FraisInitiesContentieuxComponent
                      },
                      {
                        path: 'frais-jugement', 
                        component: DebiteurComponent
                      },
                      {
                        path: 'pec-frais-generaux-direction', 
                        component: FraisGenerauxComponent
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
                        path: 'blabla', 
                        component: AdministrateurComponent
                      },
                      {
                        path: 'blabla', 
                        component: AdministrateurComponent
                      }
    ]
  },
  {
    path: 'consultation', 
    children: [
                      {
                        path: '', 
                        redirectTo: 'anotherComponent', 
                        pathMatch: 'full'
                      },
                      {
                        path: 'liste-operations', 
                        component: ConsultationOperationComponent
                      },
                      {
                        path: 'liste-debiteurs', 
                        component: ConsultationDebiteurComponent
                      }
    ]
  }
]
  },
  {
    path:"GESTIONNAIRE",
    component:GestionnaireComponent,
          children: [
            {
              path:'',
              redirectTo: 'frais',
              pathMatch:'full'
            },
            {
              path: 'frais', 
              children: [
                            {
                              path: '', 
                              redirectTo: 'pec-frais-contentieux', 
                              pathMatch: 'full'
                            },
                            {
                              path:'pec-frais-contentieux',
                              component: FraisInitiesContentieuxComponent
                            },
                            {
                              path: 'frais-jugement', 
                              component: DebiteurComponent
                            },
                            {
                              path: 'pec-frais-generaux-direction', 
                              component: FraisGenerauxComponent
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
                              path: 'blabla', 
                              component: AdministrateurComponent
                            },
                            {
                              path: 'blabla', 
                              component: AdministrateurComponent
                            }
          ]
        },
        {
          path: 'consultation', 
          children: [
                            {
                              path: '', 
                              redirectTo: 'anotherComponent', 
                              pathMatch: 'full'
                            },
                            {
                              path: 'liste-operations', 
                              component: ConsultationOperationComponent
                            },
                            {
                              path: 'liste-debiteurs', 
                              component: ConsultationDebiteurComponent
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
  

  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
