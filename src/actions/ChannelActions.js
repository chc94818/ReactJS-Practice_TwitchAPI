import {ChannelActionTypes} from '../constants/ActionTypes';
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
const axiosRequestGameChannels = (game_id = 33214, limit = 1) => {
    //console.log(game_id);
    return helix.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `streams?first=${limit}&game_id=${game_id}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
        ).catch(error => {
            console.log(error);
        });
};
// request for specific game's top channels
const requestGameChannels = (game_id = 33214, limit = 16, dispatch) => {
    //console.log('Load');
    //console.log(game_id);
    axiosRequestGameChannels(game_id, limit).then(response => {
        //console.log('action request');
        //console.log(response);
        return response.data.data.map((channelObj) => {
            //console.log(channelObj.thumbnail_url);
            return channelObj?{
                user_id: channelObj.user_id,
                id: channelObj.id,
                title: channelObj.title,
                name: channelObj.user_name,
                viewers: channelObj.viewer_count,
                imgURL: channelObj.thumbnail_url.replace('-{width}x{height}.jpg', '-500x280.jpg'),
            }:channelDefault;

        })
    }).then((channels) => dispatch({
        type: ChannelActionTypes.LOAD_CHANNELS,
        channels,
    }))
        .catch(error => {
            console.log(error);
        });
};


const axiosRequestTops = (limit) => {
    return helix.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `streams?first=${limit}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};

// request top channel for each game
const requestTopChannels = (limit = 4, dispatch) => {
    return axiosRequestTops(limit)
    .then((channels) => {
        //console.log(channels.data.data);
        return channels.data.data.map((channelObj) => {
            //console.log(channelObj.thumbnail_url);
            return channelObj?{
                user_id: channelObj.user_id,
                id: channelObj.id,
                title: channelObj.title,
                name: channelObj.user_name,
                viewers: channelObj.viewer_count,
                imgURL: channelObj.thumbnail_url.replace('-{width}x{height}.jpg', '-500x280.jpg'),
            }:channelDefault;

        })
    }).then((channels) => {
        dispatch({
            type: ChannelActionTypes.LOAD_CHANNELS,
            channels,
        })
    }).catch(error => {
        console.log(error);
    });
};

const axiosRequestChannel = (user_id) => {
    return axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `subscriptions?broadcaster_id=${user_id}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};

// request specific channel of id
const requestChannel = (user_id = '67143805', dispatch) => {
    return axiosRequestChannel(user_id).then(response => {
        //console.log('requestChannel');
        //console.log(response);
        return response.data.streams.map((channelObj) => {
            return channelObj?{
                id: channelObj.channel._id,
                title: channelObj.channel.status,
                name: channelObj.channel.name,
                displayName: channelObj.channel.display_name,
                viewers: channelObj.viewers,
                snapShotURL: channelObj.preview.medium,
                logoURL: channelObj.channel.logo,
            }:channelDefault;
        });
    }).then((channels) => dispatch({
        type: ChannelActionTypes.SEARCH_CHANNEL,
        channels,
    })).catch(error => {
        console.log(error);
    });
};

// Actions
const ChannelActions = {
    // load descending order channels by viewers of specific game
    loadChannels(game_id, limit) {
        //console.log('action');
        //console.log(game);
        return requestGameChannels.bind(null, game_id, limit);
    },
    // load each top channel of k games
    loadTopKChannels(K) {
        return requestTopChannels.bind(null, K);
    },
    // search specific channel with channel name
    searchChannel(channelName) {
        return requestChannel.bind(null, channelName);
    }
};
export default ChannelActions;