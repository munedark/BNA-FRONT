import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';
import { SharedServicesService } from '../services/shared-services.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-forme-arrangement',
  templateUrl: './forme-arrangement.component.html',
  styleUrls: ['./forme-arrangement.component.scss']
})
export class FormeArrangementComponent {
  dateDebut: Date = new Date();
  duree!: number;
  numCtx: number | undefined;
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null;
  echeances: { date: Date, montant: number }[] = [];
  total: number = 0;

  constructor(private sharedService: SharedServicesService) {}

  submit() {
    if (this.numCtx) {
      this.sharedService.recherche(this.numCtx).subscribe(data => {
        this.debiteurData = data;
        console.log(this.debiteurData);
      });

      this.sharedService.risques(this.numCtx).subscribe(data => {
        this.risquesData = data;
        console.log(this.risquesData);
        this.calculateEcheances();
      });
    }
  }

  calculateEcheances() {
    if (this.risquesData && this.duree) {
      const totalIr = this.risquesData.reduce((sum, r) => sum + r.ir, 0);
      const totalIc = this.risquesData.reduce((sum, r) => sum + r.ic, 0);
      const totalSolde = this.risquesData.reduce((sum, r) => sum + r.soldePrincipaleRisque, 0);
      this.total = totalIr + totalIc + totalSolde;

      const monthlyAmount = Math.round(this.total / this.duree);

      this.echeances = [];
      for (let i = 0; i < this.duree; i++) {
        const date = new Date(this.dateDebut);
        date.setMonth(date.getMonth() + i);
        this.echeances.push({ date, montant: monthlyAmount });
      }

      // Adjust the last payment to cover the total amount
      if (this.echeances.length > 0) {
        const lastEcheance = this.echeances[this.echeances.length - 1];
        lastEcheance.montant += this.total - (monthlyAmount * this.duree);
      }
    }
  }

  async exportAsPDF() {
    const doc = new jsPDF();
    const img = new Image();
    img.src = '../../assets/bna.png';

    img.onload = () => {
      // Add the logo
      doc.addImage(img, 'PNG', 10, 10, 20, 20);

      // Add the text "BNA BANK" in front of the image
      doc.setFontSize(30);
      doc.setTextColor('#657272');
      doc.text('BNA BANK', 35, 25);

      // Add the title "Arrangement" centered
      doc.setFontSize(20);
      doc.setTextColor('#00A887');
      const pageWidth = doc.internal.pageSize.getWidth();
      const titleText = 'Arrangement';
      const titleX = (pageWidth - doc.getTextWidth(titleText)) / 2;
      doc.text(titleText, titleX, 50);

      // Add dossier number and export date on the left side under the title
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(`Numéro dossier : ${this.numCtx}`, 10, 60);
      doc.text(`Date d'exportation : ${new Date().toLocaleDateString()}`, 10, 65);

      // Define the columns and rows for the table
      const columns = ["Échéance", "Montant"];
      const rows = this.echeances.map(e => [e.date.toLocaleDateString(), e.montant.toFixed(3) + ' TND']);

      // Add the table using autoTable with colored header and alternate row styles
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 70,
        headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] },
        didParseCell: (data) => {
          if (data.section === 'body') {
            data.cell.styles.fillColor = data.row.index % 2 === 0 ? [240, 240, 240] : [255, 255, 255];
          }
        }
      });

      // Add the total
      const finalY = (doc as any).lastAutoTable.finalY + 10;
      doc.text(`Totale: ${this.total.toFixed(3)} TND`, 14, finalY);
      doc.save('table.pdf');
    };
  }
}
