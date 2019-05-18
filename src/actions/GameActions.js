import {GameActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const axiosRequestTest = (dispatch)=>{
    const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
    axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `https://api.twitch.tv/kraken/games/top?&limit=${50}`,
        {headers: {
                'Client-ID': client_id,
            }}
    )
        .then(response => {
            //console.log(response.data);
            return response.data.top.map((gameObj)=>gameObj.game.name)
        }).then((games) => dispatch({
        type: GameActionTypes.LOAD_GAMES_SUCCESS,
        games
        }))
        .catch(error => {
            console.log(error);
        });
};
let GameActions = {
    loadGames() {
        return axiosRequestTest;
    }
};
export default GameActions;