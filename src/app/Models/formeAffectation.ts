
export interface FormeAffectation {
    idAffectation: number;
    typeRecouvrement: string;
    mntAffectationPrincipale: number;
    mntFrais: number;
    dateAffectation: Date|null;
    nouveauSolde:number;
}
