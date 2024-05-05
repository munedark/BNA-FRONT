import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { FormeAffectation } from "./FormeAffectation";


export interface OperationAffectation {
    
    idOperation?: number;
    mntOperation?: number;
    dateOperation?: Date | null;
    dateCreation?: Date | null;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
    matriculeEmploye?:string;
    formeAffectation:FormeAffectation;
}
