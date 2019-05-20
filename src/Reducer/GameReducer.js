import Immutable from 'immutable';
import {GameActionTypes} from '../constants/ActionTypes';

const {List} = Immutable;

const GameReducer = (state = new List(), action) => {
    switch (action.type) {
        case GameActionTypes.LOAD_TOP_GAMES:
            return new List(action.topGames);
        default:
            return state;
    }
};

export default GameReducer;