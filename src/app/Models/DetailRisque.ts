import { JournalDetail } from "./JournalDetail";

export interface DetailRisque{
    idDetailRisque:number;
    dateEchance:Date;
    mntEchance:number;
    journalDetail:JournalDetail;
}