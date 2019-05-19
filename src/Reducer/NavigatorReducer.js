import {NavigatorActionTypes} from '../constants/ActionTypes';


const NavigatorReducer = (state = 1, action) => {
    switch (action.type) {
        case NavigatorActionTypes.ON_SELECT:
            //console.log('reducer');
            //console.log(action.selectedId);
            return action.selectedId ? action.selectedId : 1;
        default:
            return state;
    }
};

export default NavigatorReducer;