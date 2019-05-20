import {WatchingActionTypes} from '../constants/ActionTypes';
import axios from "axios";


const WatchingActions = {
    createWatching(channel){
        //console.log('action');
        return {
            type: WatchingActionTypes.CREATE_WATCHING,
            channel
        };
    },
    updateWatching(channel) {
        return {
            type: WatchingActionTypes.UPDATE_WATCHING,
            channel
        };
    },
};
export default WatchingActions;