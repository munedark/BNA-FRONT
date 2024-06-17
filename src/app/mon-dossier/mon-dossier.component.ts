import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ClientInfo } from '../Models/ClientInfo';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-mon-dossier',
  templateUrl: './mon-dossier.component.html',
  styleUrls: ['./mon-dossier.component.scss']
})
export class MonDossierComponent implements OnInit{
  matricule:string='';
  clientInfo:ClientInfo={} as ClientInfo;
  constructor(private clientService:ClientService,private auth:AuthService){}
  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
    this.clientService.clientInfo(this.matricule).subscribe((data)=>{
      this.clientInfo=data;
    })
  }



}
