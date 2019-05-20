import {ChannelActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';

const axiosRequestGameChannels = (game, limit) => {
    return axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=${limit}&hls=true`,
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
const requestGameChannels = (game = 'starcraft', limit = 16, dispatch) => {
    axiosRequestGameChannels(game, limit).then(response => {
        return response.data.streams.map((channelObj) => {
            return {
                id: channelObj.channel._id,
                title: channelObj.channel.status,
                name: channelObj.channel.name,
                displayName: channelObj.channel.display_name,
                viewers: channelObj.viewers,
                snapShotURL: channelObj.preview.medium,
                logoURL: channelObj.channel.logo,
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


const axiosRequestTops = (limit) => {
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

// request top channel for each game
const requestTopChannels = (limit = 4, dispatch) => {
    return axiosRequestTops(limit).then(response => {
        return Promise.all(response.data.top.map((channel) => {
            return axiosRequestGameChannels(channel.game.name, 8);
        }));
    }).then((channels) => {
        //console.log(channels);
        return channels.map((channelObj) => {

            return {
                id: channelObj.data.streams[0].channel._id,
                title: channelObj.data.streams[0].channel.status,
                name: channelObj.data.streams[0].channel.name,
                displayName: channelObj.data.streams[0].channel.display_name,
                viewers: channelObj.data.streams[0].viewers,
                snapShotURL: channelObj.data.streams[0].preview.medium,
                logoURL: channelObj.data.streams[0].channel.logo,
            }
        });
    }).then((channels) => {
        dispatch({
            type: ChannelActionTypes.LOAD_CHANNELS,
            channels,
        })
    }).catch(error => {
        console.log(error);
    });
};

const axiosRequestChannel = (name) => {
    return axios.get(
        //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
        `https://api.twitch.tv/kraken/streams/?channel=${name}`,
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
const requestChannel = (name = 'gaules', dispatch) => {
    return axiosRequestChannel(name).then(response => {
        //console.log('response');
        //console.log(response);
        return response.data.streams.map((channelObj) => {
            return {
                id: channelObj.channel._id,
                title: channelObj.channel.status,
                name: channelObj.channel.name,
                displayName: channelObj.channel.display_name,
                viewers: channelObj.viewers,
                snapShotURL: channelObj.preview.medium,
                logoURL: channelObj.channel.logo,
            }

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
    loadChannels(game, limit) {
        //console.log('action');
        //console.log(game);
        return requestGameChannels.bind(null, game, limit);
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