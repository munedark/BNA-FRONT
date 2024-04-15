export interface AjoutFrais{
    typeFrais?:string;
    typeAuxiliaire?:string;
    cinAuxiliaire?:number|null;
    nomAuxiliaire?:string;
    numeroAffaire?:number|null;
    montantHonoraire?:number|null;
    typePaiment:string;
    natureAuxiliaire?:string;
    RneAuxiliaire?:string;
    prenomAuxiliaire?:string;
    dateOperation?:Date | undefined;
    montantFrais?:number|null;
    typePiece?:string;
    nomBeneficiaire?:string;
    autre:string;
    RIB?:string;
    numeroPiece?:number|null;
    auxiliaire?:string;
}