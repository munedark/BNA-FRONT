import { Cheque } from "./Cheque";
import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";
import { FormeAffectation } from "./FormeAffectation";
import { virement } from "./virement";
export interface Operation {
    idOperationCtx?: number;
    dateOperation?: Date | null;
    dateAjout?: Date | null;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
    cheque?: Cheque;
    virementTelecomponse?: virement;
    formeAffectation?: FormeAffectation;
}


