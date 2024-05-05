import { Cheque } from "./Cheque";
import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";
import { FormeAffectation } from "./FormeAffectation";
import { virement } from "./virement";

export interface FraisGenerauxAux {
    
    idOperation?: number;
    mntFrais?: number;
    typeFrais?: string;
    typeAuxiliaire?: string;
    auxiliaire?: string;
    cinAuxiliaire?: number;
    nomAuxiliaire?: string;
    mntHonoraire?: number;
    rib?: number;
    nomBeneficiaire?: string;
    natureAuxiliaire?: string;
    rneAuxiliaire?: string;
    prenomAuxiliaire?: string;
    dateOperation?: Date | null;
    dateCreation?: Date | null;
    dateValeurCTX?: Date|undefined;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    numAffaireCTX?: number;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    dossierDebiteur?: DossierDebiteur;

}
