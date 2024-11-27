import { SportLevel } from "@/models/SportLevel";

export interface PlayerFinder {
    id: string;
    seeker: string;
    description : string;
    acceptedLevels: SportLevel[];
    comment : number;
    playersMax : number;
    playersRegistered : number;
    datePublied : Date;
    dateSchedule : Date;
}