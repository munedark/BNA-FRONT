import { CompteBancaire } from "./CompteBancaire";

export interface AgenceBank{
    emplacement:string;
    compteBancaires:CompteBancaire[];
}