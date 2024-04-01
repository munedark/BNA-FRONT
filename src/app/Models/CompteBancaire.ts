import { AgenceBank } from "./AgenceBank";
import { Client } from "./Client";
import { Risque } from "./Risque";

export interface CompteBancaire{
    solde:number;
    agenceBank:AgenceBank;
    client:Client;
    risque:Risque[]
}