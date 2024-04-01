import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";

export interface OperationCTX{
    mntOperation:number;
    mntFrais:number;
    dateOperation:Date;
    dateCreation:Date;
    matriculeAjout:string;
    matriculeValidateur:string;
    dateValidation:Date;
    etatOperation:string;
    numAffaireCTX:number;
    nomBeneficiairePaiment:number;
    motifOperationCTX:number;
    typeOperations:TypeOperation[];
    typePaiments:TypePaiment[];
    risque:Risque;
    dossierDebiteur:DossierDebiteur;

}