import { DetailRisque } from "./DetailRisque";
import { JournalRisque } from "./JournalRisque";
import { Produit } from "./Produit";

export interface Risque {
        id:number;
        soldeRisque:number;
        mntFrais:number;
        mntEntreePrincipale:number;
        journalRisque:JournalRisque;
        detailRisque:DetailRisque[];
        produit:Produit;
        
        
        
}