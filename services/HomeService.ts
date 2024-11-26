import { SearchingForPlayer } from '@/mappers/searchingForPlayerMapper'
import homePlayersSearch from '@/mock/homePlayersSearchMock.json'

/* TODO : router les services sur autre chose que du mock. */
export function getSearchingForPlayerList(): SearchingForPlayer[] {
    /* TODO FInir le job x)*/
    return JSON.parse(JSON.stringify(homePlayersSearch))
}