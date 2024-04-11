import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent {
constructor(private sharedService:SharedServicesService){}
click(){
  this.sharedService.operationByType('130').subscribe((data)=>{console.log(data);});
}

}
