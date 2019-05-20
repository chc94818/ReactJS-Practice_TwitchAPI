import {GameActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';

const axiosRequestTopGames = (limit) => {
    return axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `https://api.twitch.tv/kraken/games/top?&limit=${limit}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};
const requestTopGames = (limit = 50, dispatch) => {

    axiosRequestTopGames(limit).then(response => {
        //console.log(response);
        return response.data.top.map((gameObj) => {
            return {
                id: gameObj.game._id,
                name: gameObj.game.name,
                imgURL: gameObj.game.box.medium,
                viewers: gameObj.viewers,
            }
        })
    }).then((topGames) => dispatch({
        type: GameActionTypes.LOAD_TOP_GAMES,
        topGames,
    }))
        .catch(error => {
            console.log(error);
        });
};
let GameActions = {
    loadTopGames(limit) {
        return requestTopGames.bind(null, limit);
    },
};
export default GameActions;