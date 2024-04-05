import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";

export interface OperationCTX{
    mntOperation:number;
    mntFrais:number;
    dateOperation:Date|null;
    dateCreation:Date|null;
    dateValeurCTX:Date|null;
    matriculeAjout:string;
    matriculeValidateur:string;
    dateValidation:Date|null;
    etatOperation:string;
    numAffaireCTX:number;
    nomBeneficiairePaiment:string;
    motifOperationCTX:number;
    typeOperations:TypeOperation[];
    typePaiments:TypePaiment[];
    risque:Risque;
    dossierDebiteur:DossierDebiteur;

}