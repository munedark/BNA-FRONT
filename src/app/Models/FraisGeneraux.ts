import { DossierDebiteur } from "./DossierDebiteur";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";
import { Auxiliaire } from "./Auxiliaire";

export interface FraisGeneraux {
    idOperationCtx?: number;
    mntFrais?: number;
    typeFrais?: string;
    typeAuxiliaire?: string;
    auxiliaire?: Auxiliaire;
    cinAuxiliaire?: number;
    nomAuxiliaire?: string;
    mntHonoraire?: number;
    rib?: number;
    nomBeneficiaire?: string;
    natureAuxiliaire?: string;
    rneAuxiliaire?: string;
    prenomAuxiliaire?: string;
    dateOperation?: Date | null;
    dateAjout?: Date | null;
    dateValeurCTX?: Date | undefined;
    matriculeAjout?: string;
    matriculeValidateur?: string;
    dateValidation?: Date | null;
    etatOperation?: string;
    numAffaireCTX?: number;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    dossierDebiteur?: DossierDebiteur;
    numeroPiece?: number | null;
    typePiece?: string;
}
