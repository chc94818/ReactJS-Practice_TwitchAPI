import Immutable from 'immutable';
import {ChannelActionTypes} from '../constants/ActionTypes';

const {List} = Immutable;

const ChannelReducer = (state = new List(), action) => {
    switch (action.type) {
        case ChannelActionTypes.LOAD_CHANNELS:
            return new List(action.channels);
        case ChannelActionTypes.LOAD_TOP_K_CHANNELS:
            return new List(action.channels);
        // case ChannelActionTypes.SEARCH_CHANNEL:
        //     return new List(action.channels);
        default:
            return state;
    }
};

export default ChannelReducer;