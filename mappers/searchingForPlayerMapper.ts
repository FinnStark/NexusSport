import { SportLevel } from "./sportLevel";

export interface SearchingForPlayer {
    seeker: string,
    description : string,
    acceptedLevels: SportLevel[],
    comment : number,
    playersMax : number,
    playersRegistered : number,
    datePublied : Date,
    dateSchedule : Date
}