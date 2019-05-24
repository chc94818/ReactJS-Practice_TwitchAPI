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
            updateChannels,
            updateWatching,
            range,
            history,
            buttonSet,
            location,
        } = this.props;
        const sliceChannels = range ? channels.slice(0, range) : channels;
        return (
            <Search
                channels={sliceChannels}
                onSelect={() => onSelect(-1)}
                updateChannels={() => updateChannels(location.state.gameId, 24)}
                updateWatching={(channel) => updateWatching(channel)}
                history={history}
                buttonSet={buttonSet}
                gameName={location.state? location.state.gameName:""}
                gameImgURL={location.state? location.state.gameImgURL:""}
            />
        );
    }
}

SearchContainer.propTypes = {
};
SearchContainer.defaultProps = {
    buttonSet: true,
};

export default withRouter(SearchContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        updateChannels: ChannelActions.updateChannels,
        updateWatching: WatchingActions.updateWatching,
    }
)(SearchContainer));