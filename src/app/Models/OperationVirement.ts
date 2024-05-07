import { Cheque } from "./Cheque";
import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";
import { FormeAffectation } from "./FormeAffectation";
import { virement } from "./virement";

export interface OperationVirement   {
idOperation?: number;
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
    virementTelecomponse:virement;
}
