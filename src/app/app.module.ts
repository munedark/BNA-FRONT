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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrateurComponent,
    ValidateurComponent,
    GestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
