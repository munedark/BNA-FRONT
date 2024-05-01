import { AgenceBank } from "./AgenceBank";

export interface Cheque{
    numCheque:number|null;
    mntCheque:number|null;
    ribDonneur:string;
    agenceCheque:AgenceBank;
    motif:string
}