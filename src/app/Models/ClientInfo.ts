import { DossierDebiteur } from "./DossierDebiteur";
import { Risque } from "./Risque";

export interface ClientInfo{
dossierDebiteur:DossierDebiteur;
risques:Risque[];
}