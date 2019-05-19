import Immutable from 'immutable';
import {TopActionTypes} from '../constants/ActionTypes';

const {List} = Immutable;

const TopReducer = (state = new List(), action) => {
    switch (action.type) {
        case TopActionTypes.LOAD_TOPS:
            return new List(action.tops);
        default:
            return state;
    }
};

export default TopReducer;