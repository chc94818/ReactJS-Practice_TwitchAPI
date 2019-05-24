import Immutable from 'immutable';
import {GameActionTypes} from '../constants/ActionTypes';

const {List, Record} = Immutable;
const GameRecord = Record({
    id: undefined,
    name: undefined,
    imgURL: undefined,
});

const _update = (gameList, newGames) => {
    const updateGames = newGames.filter((game)=>{
        const find = gameList.find((entry)=> entry.id === game.id);
        return !find;
    });
    return gameList.push(...updateGames.map((game) =>
        new GameRecord({
                id: game.id,
                name: game.name,
                imgURL: game.imgURL,
            }
        ))
    );
};
const GameReducer = (state = new List(), action) => {
    switch (action.type) {
        case GameActionTypes.UPDATE_GAMES:
            return _update(state, action.topGames);
        default:
            return state;
    }
};

export default GameReducer;