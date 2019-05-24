import Immutable from 'immutable';
import {ChannelActionTypes} from '../constants/ActionTypes';

const {List, Record} = Immutable;

const ChannelRecord = Record({
    user_id: undefined,
    id: undefined,
    title: undefined,
    name: undefined,
    viewers: undefined,
    imgURL: undefined,
    offline_image_url: undefined,
    profile_image_url: undefined,
    description: undefined,
});

const _update = (channelList, newChannels) => {
    const updateChannels = newChannels.filter((channel)=>{
        const find = channelList.find((entry)=> entry.id === channel.id);
        return !find;
    });
    return channelList.push(...updateChannels.map((channel) =>
        new ChannelRecord({
            user_id: channel.user_id,
            id: channel.id,
            title: channel.title,
            name: channel.name,
            viewers: channel.viewers,
            imgURL: channel.imgURL,
            offline_image_url: channel.offline_image_url,
            profile_image_url: channel.profile_image_url,
            description: channel.description,
            }
        ))
    );
};

const ChannelReducer = (state = new List(), action) => {
    switch (action.type) {
        case ChannelActionTypes.LOAD_TOP_K_CHANNELS:
            return new List(action.channels);
        case ChannelActionTypes.CREATE_CHANNELS:
            return new List(action.channels);
        case ChannelActionTypes.UPDATE_CHANNELS:
            return _update(state, action.channels);
        default:
            return state;
    }
};

export default ChannelReducer;