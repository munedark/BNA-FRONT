import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
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
import { DebiteurComponent } from './debiteur/debiteur.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { AffichageRisqueComponent } from './affichage-risque/affichage-risque.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailRisqueComponent } from './detail-risque/detail-risque.component';
import { FraisEnregistrementComponent } from './frais-enregistrement/frais-enregistrement.component';
import { FraisGenerauxComponent } from './frais-generaux/frais-generaux.component';
import { AjouterFraisComponent } from './ajouter-frais/ajouter-frais.component';
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
    DebiteurComponent,
    AffichageRisqueComponent,
    DetailRisqueComponent,
    FraisEnregistrementComponent,
    FraisGenerauxComponent,
    AjouterFraisComponent,
    FraisGenerauxValidateurComponent,
    FraisJugementValidateurComponent,
    ConsultationOperationComponent,
    ConsultationDebiteurComponent,
    RechercheOperationComponent,
    AffichageOperationsComponent,
    FraisInitiesContentieuxComponent,
    FormeFraisInitiesContentieuxComponent,
    

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
    MatDialogModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
