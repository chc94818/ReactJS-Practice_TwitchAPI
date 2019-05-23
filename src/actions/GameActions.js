import {GameActionTypes} from '../constants/ActionTypes';
import axios from "axios";


const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
const helix = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {'Client-ID': client_id}
});
// const channelDefault = {
//     id: 34216081824,
//     title: 'Loading',
//     name: 'TSM_Hamlinz',
//     viewers: 'Loading',
//     logoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/60416fbc-0497-4292-896e-3b3087010fac-profile_image-300x300.png',
// };

// axios request
const axiosRequestTopGames = (limit) => {
    return helix.get(
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

// request for top games' information
const requestTopGames = (limit = 50, dispatch) => {
    axiosRequestTopGames(limit).then(response => {
        return response.data.data.map((gameObj) => {
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
    // Load top {limit} games
    loadTopGames(limit) {
        return requestTopGames.bind(null, limit);
    },
};
export default GameActions;