import React from 'react';
import {connect} from 'react-redux';
import Live from './Live';
import WatchingActions from "../../actions/WatchingActions";

class LiveContainer extends React.Component {
    static getRandom(min, max, nums) {
        const list = [...Array((max-min)).keys()].map(e=>e+min);

        const randomList = [];
        for (let i = 0; i < nums; i++) {
            let ran = Math.floor(Math.random() * (max-min));
            randomList.push(list[ran]);
            list.slice(ran, 1);
        }
        return randomList;
    }

    componentDidMount() {
        const {
            watchChannel,
            channels,
            createWatching,
        } = this.props;
        if (watchChannel.displayName === 'Loading') {
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

