import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";


export interface OperationClotureRisque {
    
    idOperationCtx?: number;
    mntOperation?: number;
    dateOperation?: Date | null;
    dateAjout?: Date | null;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
    matriculeEmploye?:string;
}
