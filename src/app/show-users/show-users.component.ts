import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent {
  agents: any[] = [];
  title = 'Liste des agents';
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'numtele'];

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.adminService.showAgents().subscribe(
      (data: any[]) => {
        this.agents = data;
        this.dataSource.data = data; 
      },
      error => {
        console.error('Error fetching agents:', error);
      }
    );
  }
}