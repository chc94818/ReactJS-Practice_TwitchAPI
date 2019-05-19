import {ChannelActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const axiosRequestTest = (game = 'starcraft', dispatch) => {
    const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
    const limit = 16;
    axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,

        `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=${limit}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    )
        .then(response => {
            //console.log('data');
            console.log(response.data.streams);
            return response.data.streams.map((channelObj) => {
                //console.log("channel");
                //console.log(channelObj);
                return {
                    id: channelObj.channel._id,
                    title: channelObj.channel.status,
                    name: channelObj.channel.name,
                    displayName: channelObj.channel.display_name,
                    viewers: channelObj.viewers,
                    imgURL: channelObj.preview.medium
                }

            })
        }).then((channels) => dispatch({
        type: ChannelActionTypes.LOAD_CHANNELS,
        channels,
    }))
        .catch(error => {
            console.log(error);
        });
};
const ChannelActions = {
    loadChannels(game) {
        //console.log('action');
        //console.log(game);
        return axiosRequestTest.bind(null, game);
    }
};
export default ChannelActions;