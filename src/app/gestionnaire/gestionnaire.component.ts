import { Component } from '@angular/core';


@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.scss']
})
export class GestionnaireComponent {
username:string="iheb";
matricule:number=56165;



title = 'MyApp';
  isMobile = false;
  isCollapsed = true;
  activeModule: string | null = null;

  constructor() {
    // Check if the screen width is smaller than 600px to determine if it's mobile
    if (window.innerWidth <= 600) {
      this.isMobile = true;
    }
  }

  toggleMenu() {
    if (this.isMobile) {
      
      this.isCollapsed = false;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleModule(module: string) {
    if (this.activeModule === module) {
      this.activeModule = null;
    } else {
      this.activeModule = module;
    }
  }


  }

