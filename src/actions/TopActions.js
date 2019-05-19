import {TopActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const axiosRequestTest = (dispatch) => {
    const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
    axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `https://api.twitch.tv/kraken/games/top?&limit=${50}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    )
        .then(response => {
            //console.log(response);
            return response.data.top.map((gameObj) => {
                return {
                    id: gameObj.game._id,
                    name: gameObj.game.name,
                    imgURL: gameObj.game.box.large,
                    viewers: gameObj.viewers,
                }
            })
        }).then((tops) => dispatch({
        type: TopActionTypes.LOAD_TOPS,
        tops,
    }))
        .catch(error => {
            console.log(error);
        });
};
let TopActions = {
    loadTops() {
        return axiosRequestTest;
    }
};
export default TopActions;