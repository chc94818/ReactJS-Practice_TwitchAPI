import {GameActionTypes} from '../constants/ActionTypes';
import axios from "axios";


const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
const helix = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {'Client-ID': client_id}
});
let nextPagination = undefined;

// axios request
const axiosRequestTopGames = (first = 8) => {
    return helix.get(
        nextPagination ?
            `games/top?after=${nextPagination}&first=${first}`
            :`games/top?&first=${first}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};


// request for top games' information
const requestGames = (first = 8, dispatch) => {
    axiosRequestTopGames(first).then(response => {
        nextPagination = response.data.pagination.cursor;
        return response.data.data.map((gameObj) => {
            return {
                id: gameObj.id,
                name: gameObj.name,
                imgURL: gameObj.box_art_url.replace('-{width}x{height}.jpg', '-285x390.jpg'),
            }
        })
    }).then((topGames) => dispatch({
        type: GameActionTypes.UPDATE_GAMES,
        topGames,
    }))
        .catch(error => {
            console.log(error);
        });
};
const GameActions = {
    updateGames(first = 8) {
        return requestGames.bind(null, first);
    },
};
export default GameActions;