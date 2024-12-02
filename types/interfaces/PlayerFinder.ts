import { SportLevel } from "@/types/interfaces/SportLevel";

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