import { Cheque } from "./Cheque";
import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";
import { FormeAffectation } from "./FormeAffectation";
import { virement } from "./virement";

export interface OperationJugement {
    
    idOperation?: number;
    mntFrais?: number;
    typeFrais?: string
    dateOperation?: Date | null;
    dateAjout?: Date | null;
    dateValeurCTX?: Date|undefined;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    numAffaireCTX?: number;
    recette?: string;
    motifOperationCTX?: number;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
}
