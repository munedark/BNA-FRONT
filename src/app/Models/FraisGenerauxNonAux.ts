import { DossierDebiteur } from "./DossierDebiteur";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";


export interface FraisGenerauxNonAux {
    filter(arg0: (op: any) => boolean): FraisGenerauxNonAux[];
    
    idOperationCtx?: number;
    mntFrais?: number;
    typeFrais?: string;
    typePiece?: string;
    rib?: number;
    nomBeneficiaire?: string;
    dateOperation?: Date | null;
    dateAjout?: Date | null;
    dateValeurCTX?: Date|undefined;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    dossierDebiteur?: DossierDebiteur;
    numeroPiece?:number|null;
}
