import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { AffichageDebiteurComponent } from './affichage-debiteur/affichage-debiteur.component';
import { JwtInterceptor } from './jwt.interceptor';
import { AuthInterceptor } from './auth-interceptor.service';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { AffichageRisqueComponent } from './affichage-risque/affichage-risque.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailRisqueComponent } from './detail-risque/detail-risque.component';
import { FraisGenerauxComponent } from './frais-generaux/frais-generaux.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FraisGenerauxValidateurComponent } from './frais-generaux-validateur/frais-generaux-validateur.component';
import { FraisJugementValidateurComponent } from './frais-jugement-validateur/frais-jugement-validateur.component';
import { ConsultationOperationComponent } from './consultation-operation/consultation-operation.component';
import { ConsultationDebiteurComponent } from './consultation-debiteur/consultation-debiteur.component';
import { RechercheOperationComponent } from './recherche-operation/recherche-operation.component';
import { AffichageOperationsComponent } from './affichage-operations/affichage-operations.component';
import { FraisInitiesContentieuxComponent } from './frais-inities-contentieux/frais-inities-contentieux.component';
import { FormeFraisInitiesContentieuxComponent } from './forme-frais-inities-contentieux/forme-frais-inities-contentieux.component';
import { AppNotificationButtonComponent } from './app-notification-button/app-notification-button.component';
import {MatBadgeModule} from "@angular/material/badge";
import { NotificationOperationComponent } from './notification-operation/notification-operation.component';
import { FraisContentieuxValidateurComponent } from './frais-contentieux-validateur/frais-contentieux-validateur.component';
import { ListeOperation110Component } from './liste-operation110/liste-operation110.component';
import { ListeOperation120Component } from './liste-operation120/liste-operation120.component';
import { ListeOperation130Component } from './liste-operation130/liste-operation130.component';
import { Validation110Component } from './validation110/validation110.component';
import { Validation120Component } from './validation120/validation120.component';
import { Validation130Component } from './validation130/validation130.component';
import { MatStepperModule } from '@angular/material/stepper';
import { VirementTelecomponseComponent } from './virement-telecomponse/virement-telecomponse.component';
import { ClotureRisqueComponent } from './cloture-risque/cloture-risque.component';
import { ClotureDossierComponent } from './cloture-dossier/cloture-dossier.component';
import { FormeChequeComponent } from './forme-cheque/forme-cheque.component';
import { FormeVirmentComponent } from './forme-virment/forme-virment.component';
import { RechercheDateComponent } from './recherche-date/recherche-date.component';
import { ChequeValidationComponent } from './cheque-validation/cheque-validation.component';
import { ListeOperation210Component } from './liste-operation210/liste-operation210.component';
import { Validation210Component } from './validation210/validation210.component';
import { FormeRisqueClotureComponent } from './forme-risque-cloture/forme-risque-cloture.component';
import { ListeOperation230Component } from './liste-operation230/liste-operation230.component';
import { Validation230Component } from './validation230/validation230.component';
import { AdminDateJournalComponent } from './admin-date-journal/admin-date-journal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormeAffectationIrComponent } from './forme-affectation-ir/forme-affectation-ir.component';
import { FormeAffectationIcComponent } from './forme-affectation-ic/forme-affectation-ic.component';
import { FormeAffectationPrincipaleComponent } from './forme-affectation-principale/forme-affectation-principale.component';
import { PecAffectationPrincipaleComponent } from './pec-affectation-principale/pec-affectation-principale.component';
import { PecAffectationIrComponent } from './pec-affectation-ir/pec-affectation-ir.component';
import { PecAffectationIcComponent } from './pec-affectation-ic/pec-affectation-ic.component';
import { AjoutFraisGenerauxComponent } from './ajout-frais-generaux/ajout-frais-generaux.component';
import { FraisJugementComponent } from './frais-jugement/frais-jugement.component';
import { RecouvrementChequeComponent } from './recouvrement-cheque/recouvrement-cheque.component';
import { FormeJugementComponent } from './forme-jugement/forme-jugement.component';
import { FormeArrangementComponent } from './forme-arrangement/forme-arrangement.component';
import { ArrangementComponent } from './arrangement/arrangement.component';
import { SupprimerAgentComponent } from './supprimer-agent/supprimer-agent.component';
import { RechercherAgentComponent } from './rechercher-agent/rechercher-agent.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { ClientComponent } from './client/client.component';
import { MonDossierComponent } from './mon-dossier/mon-dossier.component';
import { InfoCtxComponent } from './info-ctx/info-ctx.component';
import { RistourneAgenceComponent } from './ristourne-agence/ristourne-agence.component';
import { GererAgentComponent } from './gerer-agent/gerer-agent.component';
import { GererClientComponent } from './gerer-client/gerer-client.component';
import { SupprimerUtilisateurComponent } from './supprimer-utilisateur/supprimer-utilisateur.component';
import { ConsulterUtilisateursComponent } from './consulter-utilisateurs/consulter-utilisateurs.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { MoidfierAgentComponent } from './moidfier-agent/moidfier-agent.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ContentieuxInfoComponent } from './contentieux-info/contentieux-info.component';
import { ClientAgencesComponent } from './client-agences/client-agences.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    AdministrateurComponent,
    ValidateurComponent,
    GestionnaireComponent,
    NavbarComponent,
    SidebarComponent,
    DropDownComponent,
    UserFormComponent,
    RechercheComponent,
    SharedTableComponent,
    ClientFormComponent,
    ShowUsersComponent,
    AffichageDebiteurComponent,
    AffichageRisqueComponent,
    DetailRisqueComponent,
    FraisGenerauxComponent,
    FraisGenerauxValidateurComponent,
    FraisJugementValidateurComponent,
    ConsultationOperationComponent,
    ConsultationDebiteurComponent,
    RechercheOperationComponent,
    AffichageOperationsComponent,
    FraisInitiesContentieuxComponent,
    FormeFraisInitiesContentieuxComponent,
    AppNotificationButtonComponent,
    NotificationOperationComponent,
    FraisContentieuxValidateurComponent,
    ListeOperation110Component,
    ListeOperation120Component,
    ListeOperation130Component,
    Validation110Component,
    Validation120Component,
    Validation130Component,
    VirementTelecomponseComponent,
    ClotureRisqueComponent,
    ClotureDossierComponent,
    FormeChequeComponent,
    FormeVirmentComponent,
    RechercheDateComponent,
    ChequeValidationComponent,
    ListeOperation210Component,
    Validation210Component,
    FormeRisqueClotureComponent,
    ListeOperation230Component,
    Validation230Component,
    AdminDateJournalComponent,
    PageNotFoundComponent,
    FormeAffectationIrComponent,
    FormeAffectationIcComponent,
    FormeAffectationPrincipaleComponent,
    PecAffectationPrincipaleComponent,
    PecAffectationIrComponent,
    PecAffectationIcComponent,
    AjoutFraisGenerauxComponent,
    FraisJugementComponent,
    RecouvrementChequeComponent,
    FormeJugementComponent,
    FormeArrangementComponent,
    ArrangementComponent,
    SupprimerAgentComponent,
    RechercherAgentComponent,
    PageAccueilComponent,
    LoginClientComponent,
    InscriptionClientComponent,
    ClientComponent,
    MonDossierComponent,
    InfoCtxComponent,
    RistourneAgenceComponent,
    GererAgentComponent,
    GererClientComponent,
    SupprimerUtilisateurComponent,
    ConsulterUtilisateursComponent,
    AjouterClientComponent,
    MoidfierAgentComponent,
    ModifierClientComponent,
    ContentieuxInfoComponent,
    ClientAgencesComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatBadgeModule,
    MatStepperModule,
    
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
