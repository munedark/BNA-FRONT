import { DossierDebiteur } from "./DossierDebiteur";
import { TypeOperation } from "./TypeOperation";


export interface OperationClotureDossier {
    
    idOperation?: number;
    mntOperation?: number;
    dateOperation?: Date | null;
    dateCreation?: Date | null;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    dossierDebiteur?: DossierDebiteur;
    matriculeEmploye?:string;
}
