export interface AjoutFrais{
    typeFrais:string;
    typeAuxiliaire:string;
    cinAuxiliaire:number|null;
    nomAuxiliaire:string;
    regime:number|null;
    numeroAffaire:number|null;
    montantHonoraire:number|null;
    typePaiment:string;
    natureAuxiliaire:string;
    RneAuxiliaire:string;
    prenomAuxiliaire:string;
    dateOperation:Date;
    montantFrais:number|null;
}