import {WatchingActionTypes} from '../constants/ActionTypes';

let WatchingActions = {
    createWatching(){
        return{
            type: WatchingActionTypes.CREATE_WATCHING,
        }
    },
    updateWatching(channel) {
        return {
            type: WatchingActionTypes.UPDATE_WATCHING,
            channel
        }
    },
};
export default WatchingActions;