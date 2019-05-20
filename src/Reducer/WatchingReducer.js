import Immutable from 'immutable';
import {WatchingActionTypes} from '../constants/ActionTypes';

const {Record} = Immutable;

const watchingRecord = Record({
    id: undefined,
    title: undefined,
    name: undefined,
    displayName: undefined,
    viewers: undefined,
    snapShotURL: undefined,
    logoURL: undefined,
});
const recordDefault = new watchingRecord({
    id: 34166404848,
    title: 'Loading',
    name: 'gaules',
    displayName: 'Loading',
    viewers: 'Loading',
    snapShotURL: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_gaules-320x180.jpg',
    logoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/60416fbc-0497-4292-896e-3b3087010fac-profile_image-300x300.png',
});



const WatchingReducer = (state = new Record(), action) => {
    switch (action.type) {
        case WatchingActionTypes.CREATE_WATCHING:
            return recordDefault;
        case WatchingActionTypes.UPDATE_WATCHING:
            return new watchingRecord(action.channel);
        default:
            return state;
    }
};

export default WatchingReducer;