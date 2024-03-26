export interface DebiteurInfo {
    numCtx:number;
    nom: string;
    prenom: string;
    etat_CTX: boolean;
    dateTransfert: Date | null;
    soldeRecouvrement: number;
  }
  