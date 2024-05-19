import { Operation } from "./Operation";
import { Risque } from "./Risque";

export interface ClotureRisqueDto{
    operation:Operation;
    risque: Risque;
}