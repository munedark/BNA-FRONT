import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeesComponent } from './fees/fees.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RisquesComponent } from './risques/risques.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { DebiteurComponent } from './debiteur/debiteur.component';
import { ClientFormComponent } from './client-form/client-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrateurComponent,
    ValidateurComponent,
    GestionnaireComponent,
    NavbarComponent,
    SidebarComponent,
    FeesComponent,
    DropDownComponent,
    UserFormComponent,
    RechercheComponent,
    RisquesComponent,
    TableComponent,
    SharedTableComponent,
    DebiteurComponent,
    ClientFormComponent
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
    MatSortModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
