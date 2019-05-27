import {ChannelActionTypes} from '../constants/ActionTypes';
import axios from "axios";

const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
const helix = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {'Client-ID': client_id}
});
let nextPagination = undefined;

// axios request to get channel's user information
const axiosRequestUserInfo = (user_ids) => {
    let ids = "";
    user_ids.forEach((user_id) => ids += `&id=${user_id}`);
    return helix.get(
        `users?${ids}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};

// axios request to get top channels of game
const axiosRequestGameChannels = (game_id, limit = 1) => {
    return helix.get(
        nextPagination ?
            `streams?first=${limit}&game_id=${game_id}&after=${nextPagination}`
            : `streams?first=${limit}&game_id=${game_id}`,
        {
            headers: {
                'Client-ID': client_id,
            }
        }
    ).catch(error => {
        console.log(error);
    });
};

const axiosRequestTops = (limit) => {
    return helix.get(
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
            return channels.data.data.map((channelObj) => {
                return {
                    user_id: channelObj.user_id,
                    id: channelObj.id,
                    title: channelObj.title,
                    name: channelObj.user_name,
                    viewers: channelObj.viewer_count,
                    imgURL: channelObj.thumbnail_url.replace('-{width}x{height}.jpg', '-500x280.jpg'),
                };
            })
        }).then((channels) => {
            const user_ids = [...channels].map((channel) => channel.user_id);
            return axiosRequestUserInfo(user_ids).then((user_info) => {
                return [...channels].map((channel, index) => {
                    return {
                        ...channel,
                        offline_image_url: user_info.data.data[index].offline_image_url,
                        profile_image_url: user_info.data.data[index].profile_image_url,
                        description: user_info.data.data[index].description,
                     }
                })
            })
        }).then((channels) => {
            dispatch({
                type: ChannelActionTypes.LOAD_TOP_K_CHANNELS,
                channels,
            })
        }).catch(error => {
            console.log(error);
        });
};


// request channels of specific game
const requestChannels = (game_id, first = 8, create = false, dispatch) => {
    nextPagination = create? undefined:nextPagination;
    return axiosRequestGameChannels(game_id, first).then(response => {
        nextPagination = response.data.pagination.cursor;
        return response.data.data.map((channelObj) => {
            return {
                user_id: channelObj.user_id,
                id: channelObj.id,
                title: channelObj.title,
                name: channelObj.user_name,
                viewers: channelObj.viewer_count,
                imgURL: channelObj.thumbnail_url.replace('-{width}x{height}.jpg', '-500x280.jpg'),
            };

        })
    }).then((channels) => {
        const user_ids = [...channels].map((channel) => channel.user_id);
        return axiosRequestUserInfo(user_ids).then((user_info) => {
            return [...channels].map((channel, index) => {
                return {
                    ...channel,
                    offline_image_url: user_info.data.data[index].offline_image_url,
                    profile_image_url: user_info.data.data[index].profile_image_url,
                    description: user_info.data.data[index].description,
                }
            })
        })
    }).then((channels) => dispatch({
        type: create ? ChannelActionTypes.CREATE_CHANNELS : ChannelActionTypes.UPDATE_CHANNELS,
        channels,
    })).catch(error => {
        console.log('here');
        console.log(error);
    });
};
// Actions
const ChannelActions = {
    loadTopKChannels(K) {
        return requestTopChannels.bind(null, K);
    },
    createChannels(game_id, first) {
        return requestChannels.bind(null, game_id, first, true);
    },
    updateChannels(game_id, first) {
        return requestChannels.bind(null, game_id, first, false);
    }
};
export default ChannelActions;