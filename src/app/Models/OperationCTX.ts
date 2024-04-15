import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";
import { TypeOperation } from "./TypeOperation";
import { TypePaiment } from "./TypePaiment";

export interface OperationCTX {
    idOperation?: number;
    mntOperation?: number;
    mntFrais?: number;
    typeFrais?: string;
    typeAuxiliaire?: string;
    typePiece?: string;
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
    nomBeneficiairePaiment?: string;
    motifOperationCTX?: number;
    typeOperation?: TypeOperation;
    typePaiments?: TypePaiment;
    risque?: Risque;
    dossierDebiteur?: DossierDebiteur;
    numeroPiece?:number;
}
