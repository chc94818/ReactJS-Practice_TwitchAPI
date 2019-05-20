import React from 'react';
import {connect} from 'react-redux';
import Live from './Live';
import ChannelActions from "../../actions/ChannelActions";
import GameActions from "../../actions/GameActions";
import WatchingActions from "../../actions/WatchingActions";

class LiveContainer extends React.Component {
    static getRandom(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    componentDidMount() {
        const {
            watchChannel,
            channels,
            createWatching,
        } = this.props;
        if (watchChannel.displayName === 'Loading'){
            createWatching(channels.get(LiveContainer.getRandom(0, channels.size)));
        }

    }

    render() {
        const {
            watchChannel,
        } = this.props;
        return (
            <Live watchChannel={watchChannel}/>
        );
    }
}

export default LiveContainer = connect(
    (state) => ({
        channels: state.ChannelReducer,
        watchChannel: state.WatchingReducer,
    }),
    {
        createWatching: WatchingActions.createWatching,
    }
)(LiveContainer);

