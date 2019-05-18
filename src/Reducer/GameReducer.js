import Immutable, {isList} from 'immutable';
import {GameActionTypes} from '../constants/ActionTypes';

const { List, Record } = Immutable;

const gameRecord = Record({
    id: undefined,
    name: undefined,
});
let GameReducer = (state = new List(), action) => {
    switch (action.type) {
        case GameActionTypes.LOAD_GAMES_SUCCESS:
            return new List(action.games);
        default:
            return state;
    }
};

export default GameReducer;