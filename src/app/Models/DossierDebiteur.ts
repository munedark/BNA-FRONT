import { CompteBancaire } from "./CompteBancaire";
import { dossierId } from "./DossierId";
import { JournalDebiteur } from "./JournalDebiteur";
import { Risque } from "./Risque";

export interface DossierDebiteur{
dossierId:dossierId;
soldeRecouvrement:number;
etat_CTX:boolean;
dateTransfert:Date;
compteBancaire:CompteBancaire;
journalDebiteur:JournalDebiteur;
risque:Risque;
}
