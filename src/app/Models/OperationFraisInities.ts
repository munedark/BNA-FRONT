import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";

export interface OperationFraisInities{
    
    idOperation?: number;
    mntFrais?: number;
    typeFrais?: string;
    typePiece?: string;
    dateOperation?: Date | null;
    dateCreation?: Date | null;
    dateValeurCTX?: Date|undefined;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
    numeroPiece?:number|null;
    matriculeEmploye?:string;
}
