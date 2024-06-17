import { Component, Input, OnInit } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';
import { Agent } from '../Models/Agent';
import { Client } from '../Models/Client';
import { Profile } from '../Models/Profile';
import { DisplayUsers } from '../Models/DisplayUsers';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulter-utilisateurs',
  templateUrl: './consulter-utilisateurs.component.html',
  styleUrls: ['./consulter-utilisateurs.component.scss']
})
export class ConsulterUtilisateursComponent implements OnInit {
  @Input() utilisateur!: string;
  listeAgents: Profile[] = [] as Profile[];
  listeClients: Profile[] = [] as Profile[];
  clientData: DisplayUsers[] = [] as DisplayUsers[];
  agentData: DisplayUsers[] = [] as DisplayUsers[];
  dataSource: MatTableDataSource<DisplayUsers> = new MatTableDataSource<DisplayUsers>();
  clientColumns: string[] = ['identifiant', 'nom', 'prenom','email', 'état'];
  agentsColumns: string[] = [ 'identifiant','nom', 'prenom', 'email', 'role'];

  constructor(private consulterService: ConsultationService) {}

  ngOnInit(): void {
    if (this.utilisateur === 'client') {
      this.consulterService.allClients().subscribe((data) => {
        this.listeClients = data;
        console.log(this.listeClients);
        for (let client of this.listeClients) {
          let user: DisplayUsers = {} as DisplayUsers;
          user.cin = (client.personne as Client).cin;
          user.email = (client.personne as Client).email;
          user.identifiant = client.username;
          user.état = client.isEnabled ? 'ouvert' : 'fermé';
          user.nom = (client.personne as Client).nom;
          user.prenom = (client.personne as Client).prenom;
          if(user.état!='fermé'){
          this.clientData.push(user);}
        }
        this.dataSource.data = this.clientData;
      });
    }

    if (this.utilisateur === 'agent') {
      this.consulterService.allAgent().subscribe((data) => {
        this.listeAgents = data;
        console.log(this.listeAgents);
        for (let agent of this.listeAgents) {
          let user: DisplayUsers = {} as DisplayUsers;
          user.email = (agent.personne as Agent).email;
          user.identifiant = agent.username;
          user.état = agent.isEnabled ? 'ouvert' : 'fermé';
          user.nom = (agent.personne as Agent).nom;
          user.prenom = (agent.personne as Agent).prenom;
          user.role = agent.role.roleName;
          if(agent.isEnabled!=false){
          this.agentData.push(user);}
        }
        this.dataSource.data = this.agentData;
      });
    }
  }
}
