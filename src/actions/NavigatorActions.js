import {NavigatorActionTypes} from '../constants/ActionTypes';

let NavigatorActions = {
    onSelect(id) {
        //console.log('in action :' +id);
        return {
            type: NavigatorActionTypes.ON_SELECT,
            selectedId: id,
        }
    }
};
export default NavigatorActions;