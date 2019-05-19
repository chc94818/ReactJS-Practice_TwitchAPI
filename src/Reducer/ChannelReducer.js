import Immutable from 'immutable';
import {ChannelActionTypes} from '../constants/ActionTypes';

const {List} = Immutable;

const ChannelReducer = (state = new List(), action) => {
    switch (action.type) {
        case ChannelActionTypes.LOAD_CHANNELS:
            //console.log('reducer');
            //console.log(action.channels.map((channel)=>channel.id));
            return new List(action.channels);
        default:
            return state;
    }
};

export default ChannelReducer;