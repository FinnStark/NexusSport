import { PlayerFinder } from '@/models/PlayerFinder'
import homePlayersSearch from '@/mock/homePlayerFinderMock.json'

/* TODO : router les services sur autre chose que du mock. */
export function getSearchingForPlayerList(): PlayerFinder[] {
    /* TODO FInir le job x)*/
    return JSON.parse(JSON.stringify(homePlayersSearch))
}