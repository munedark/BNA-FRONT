import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VerifierDto } from '../Models/VerifierDto';

@Injectable({
  providedIn: 'root'
})
export class InscriptionClientService {
  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  verificationClient(verficationDto:VerifierDto) {
    return this.http.post<boolean>(`${this.baseUrl}inscription/verifier-client`, verficationDto);
  }

  identifiantExistant(identifiant: string) {
    return this.http.post<boolean>(`${this.baseUrl}inscription/verifier-identifiant`, identifiant );
  }

  inscription(cin: string, password: string) {
    const authDto = { cin, password };
    return this.http.post<void>(`${this.baseUrl}inscription/inscription`, authDto);
  }
  
}
