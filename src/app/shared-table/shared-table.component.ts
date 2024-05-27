import { Component, ChangeDetectorRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() displayedColumns: string[] = [];
  @Input() title: string = "";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() rowClicked = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClick(element: any) {
    if (element.stade === '4- Cloturé') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ce risque est cloturé.",
        showConfirmButton: true,
        confirmButtonText: 'OK'
      });
    } else {
      this.rowClicked.emit(element);
    }
  }

  exportAsPDF() {
    const doc = new jspdf.jsPDF();
    const table = document.querySelector('table');
    html2canvas(table!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; 
      const pageHeight = 295; 
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save(`${this.title}_table.pdf`);
    });
  }

  getEtatOperationStyle(etatOperation: string): any {
    let backgroundColor: string;
    let label: string;
    let fontWeight: string;
    switch (etatOperation) {
      case 'E':
        backgroundColor = 'orange';
        label = 'En attente';
        fontWeight = 'bold';
        break;
      case 'V':
        backgroundColor = '#129859';
        label = 'Accepté';
        fontWeight = 'bold';
        break;
      case 'R':
        backgroundColor = '#F6574F';
        label = 'Refusé';
        fontWeight = 'bold';
        break;
      default:
        backgroundColor = 'transparent';
        label = '';
        fontWeight = 'normal';
    }

    return {
      'background-color': backgroundColor,
      'color': 'white',
      'padding': '4px 8px',
      'border-radius': '4px',
      'font-weight': fontWeight 
    };
  }

  getEtatOperationLabel(etatOperation: string): string {
    switch (etatOperation) {
      case 'E':
        return 'En attente';
      case 'V':
        return 'Accepté';
      case 'R':
        return 'Refusé';
      default:
        return '';
    }
  }
}
