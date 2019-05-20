import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigatorActions from "../../../actions/NavigatorActions";
import ChannelActions from "../../../actions/ChannelActions";
import WatchingActions from "../../../actions/WatchingActions";

class SearchContainer extends React.Component {


    render() {
        const {
            channels,
            onSelect,
            updateWatching,
            range,
            history,
        } = this.props;
        //console.log('top');
        //console.log(Top);
        const sliceChannels = range ? channels.slice(0, range) : channels;
        return (
            <Search
                channels={sliceChannels}
                onSelect={onSelect}
                updateWatching={updateWatching}
                history={history}
            />
        );
    }
}
export default withRouter(SearchContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        loadChannels: ChannelActions.loadChannels,
        updateWatching: WatchingActions.updateWatching,
    }
)(SearchContainer));