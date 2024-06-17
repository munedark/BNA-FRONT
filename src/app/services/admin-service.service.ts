import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  ajouterAgent(agentData: any) {
    return this.http.post<any>('http://localhost:8080/admin/addAgent',agentData  );
  }
  ajouterClient(clientData: any) {

    return this.http.post<any>('http://localhost:8080/admin/addClient',clientData  );
  }
  showAgents() {

    return this.http.get<any>('http://localhost:8080/admin/showAllAgents');
  }
  showClients() {

    return this.http.get<any>('http://localhost:8080/admin/showAllClients');
  }

}
