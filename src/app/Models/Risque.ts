import { DetailRisque } from "./DetailRisque";
import { JournalRisque } from "./JournalRisque";
import { Produit } from "./Produit";

export interface Risque {
        id:number;
        journalRisque:JournalRisque[];
        detailRisque:DetailRisque[];
        produit:Produit[];
        mntFrais:number
        soldeRisque:number;
        mntEntreePrincipale:number;
}