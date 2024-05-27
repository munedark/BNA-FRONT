import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { virement } from '../Models/virement';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationVirement } from '../Models/OperationVirement';
import Swal from 'sweetalert2';
import { VirementTelecomponseComponent } from '../virement-telecomponse/virement-telecomponse.component';

@Injectable({
  providedIn: 'root'
})
export class VirementService {
  private _selectedDateSource: BehaviorSubject<virement[] | null> = new BehaviorSubject<virement[] | null>(null);
  selectedDate$ = this._selectedDateSource.asObservable();

  constructor(private http: HttpClient) {}

  virementByDate(date: string) {
    this.http.get<virement[]>(`http://localhost:8080/agent/virement/date/${date}`).subscribe(
      (data) => {
        this._selectedDateSource.next(data);
        if (data.length==0 ){
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Cette date n'a pas de virements.",
            showConfirmButton: true,
            confirmButtonText: 'OK'
          });
        }
      },
      (error) => {
        console.error('Error fetching virements by date:', error);
      }
    );
  }

  updateVirement(operation: OperationVirement) {
    return this.http.put<any>("http://localhost:8080/agent/operations/update/virement", operation);
  }
  refreshData(){
    const v:virement[]={} as virement[];
    this._selectedDateSource.next(v);

}
}