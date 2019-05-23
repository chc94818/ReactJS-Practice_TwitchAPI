import {GameActionTypes} from '../constants/ActionTypes';
import axios from "axios";


const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
const helix = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {'Client-ID': client_id}
});
const channelDefault = {
    id: 34216081824,
    title: 'Loading',
    name: 'TSM_Hamlinz',
    viewers: 'Loading',
    logoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/60416fbc-0497-4292-896e-3b3087010fac-profile_image-300x300.png',
};
const axiosRequestTopGames = (limit) => {
    return helix.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `games/top?&first=${limit}`,
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
        return response.data.data.map((gameObj) => {
            console.log(gameObj.box_art_url);
            return {
                id: gameObj.id,
                name: gameObj.name,
                imgURL: gameObj.box_art_url.replace('-{width}x{height}.jpg', '-285x390.jpg'),
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