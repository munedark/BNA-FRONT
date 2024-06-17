import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FraisJugementComponent } from './frais-jugement/frais-jugement.component';
import { FraisGenerauxComponent } from './frais-generaux/frais-generaux.component';
import { ConsultationOperationComponent } from './consultation-operation/consultation-operation.component';
import { ConsultationDebiteurComponent } from './consultation-debiteur/consultation-debiteur.component';
import { FraisInitiesContentieuxComponent } from './frais-inities-contentieux/frais-inities-contentieux.component';
import { FraisJugementValidateurComponent } from './frais-jugement-validateur/frais-jugement-validateur.component';
import { FraisGenerauxValidateurComponent } from './frais-generaux-validateur/frais-generaux-validateur.component';
import { FraisContentieuxValidateurComponent } from './frais-contentieux-validateur/frais-contentieux-validateur.component';
import { RecouvrementChequeComponent } from './recouvrement-cheque/recouvrement-cheque.component';
import { ClotureRisqueComponent } from './cloture-risque/cloture-risque.component';
import { ClotureDossierComponent } from './cloture-dossier/cloture-dossier.component';
import { ChequeValidationComponent } from './cheque-validation/cheque-validation.component';
import { VirementTelecomponseComponent } from './virement-telecomponse/virement-telecomponse.component';
import { ListeOperation230Component } from './liste-operation230/liste-operation230.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PecAffectationPrincipaleComponent } from './pec-affectation-principale/pec-affectation-principale.component';
import { PecAffectationIrComponent } from './pec-affectation-ir/pec-affectation-ir.component';
import { PecAffectationIcComponent } from './pec-affectation-ic/pec-affectation-ic.component';
import { ArrangementComponent } from './arrangement/arrangement.component';
import { AdminDateJournalComponent } from './admin-date-journal/admin-date-journal.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { ClientComponent } from './client/client.component';
import { RistourneAgenceComponent } from './ristourne-agence/ristourne-agence.component';
import { GererAgentComponent } from './gerer-agent/gerer-agent.component';
import { GererClientComponent } from './gerer-client/gerer-client.component';
import { MonDossierComponent } from './mon-dossier/mon-dossier.component';
import { ContentieuxInfoComponent } from './contentieux-info/contentieux-info.component';
import { ClientAgencesComponent } from './client-agences/client-agences.component';

const routes: Routes = [
  {
    path:"pageAccueil",
    component:PageAccueilComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
   {
    path:"login_client",
    component:LoginClientComponent
  },
  {
    path:"inscription",
    component:InscriptionClientComponent
  },
  
  
  { path: '', redirectTo: '/pageAccueil', pathMatch: 'full' },

  //                                                                    Client

  {path:"CLIENT",
    component:ClientComponent,
    canActivate: [authGuard],
    children:[
      {
        path:'',
        redirectTo:'Mon_profile',
        pathMatch:'full'
      },
      {
        path:'Mon_profile',
        component: MonDossierComponent
      },
      {
        path:'Contentieux_Info',
        component: ContentieuxInfoComponent
      },
      {
        path:'Agence',
        component: ClientAgencesComponent
      }
    ]

  },

  //                                                                 Administrateur

  {
    path: "ADMINISTRATEUR",
    canActivate: [authGuard],
    component: AdministrateurComponent,
    children: [
      {
        path: '',
        redirectTo: 'Gestion_Utilisateur/Gestion_agent',
        pathMatch: 'full'
      },
      {
        path: 'Date',
        component: AdminDateJournalComponent
      },
      {
        path: 'Gestion_Utilisateur',
        children: [
          {
            path: 'Gestion_agent',
            component: GererAgentComponent,
          },
          {
            path: 'Gestion_client',
            component: GererClientComponent,
          }
        ]
      }
    ]
  },
                          //                                                                    Validateur
{
  path:"VALIDATEUR",
  component:ValidateurComponent,
  canActivate: [authGuard],
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
          redirectTo: 'frais-contentieux-validation', 
          pathMatch: 'full'
        },
                      {
                        path:'frais-contentieux-validation',
                        component: FraisContentieuxValidateurComponent
                      },
                      {
                        path: 'frais-jugement-validation', 
                        component: FraisJugementValidateurComponent
                      },
                      {
                        path: 'frais-generaux-direction-validation', 
                        component: FraisGenerauxValidateurComponent
                      }
                    ]
                  },
                  {
    path: 'recouvrement', 
    children: [
      {
        path: 'Cheque-Validation', 
        component: ChequeValidationComponent
      },
      {
        path: 'Virement-Telecompencé', 
        component: VirementTelecomponseComponent
      },
      {
        path: 'Affectation', 
        component: ListeOperation230Component
      },
      {
        path: 'Arrangement', 
        component: ArrangementComponent
      },
      {
        path: 'Cloture-Risque', 
        component: ClotureRisqueComponent
      },
      {
        path: 'Cloture-Dossier', 
        component: ClotureDossierComponent
      },
      {
        path: 'Ristourne-Agence',
        component: RistourneAgenceComponent
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
//                                                                  Gestionnaire
{
  path:"GESTIONNAIRE",
  canActivate: [authGuard],
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
                              component: FraisJugementComponent
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
              path: 'PEC-Cheque', 
              component: RecouvrementChequeComponent
            },
            {
              path: 'PEC-Affectation-Principale', 
              component: PecAffectationPrincipaleComponent
            },
            {
              path: 'PEC-Affectation-Ir', 
              component: PecAffectationIrComponent
            },
            {
              path: 'PEC-Affectation-Ic', 
              component: PecAffectationIcComponent
            },

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
  
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
