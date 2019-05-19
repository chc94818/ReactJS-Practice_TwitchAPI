import React from 'react';
import {connect} from 'react-redux';
import Live from './Live';

class LiveContainer extends React.Component {
    static getRandom(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    render() {
        const {channels, location} = this.props;
        const randomId = Live.getRandom(0, channels.size);
        const randomStreamer = channels.get(randomId) ? channels.get(randomId).name : 'westdoor';
        const name = location.streamer ? location.streamer : randomStreamer;
        const url = `https://player.twitch.tv/?channel=${name}&muted=true&controls=true`;
        //console.log(url);
        return (
            <Live liveURL={url}/>
        );
    }
}

export default LiveContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
)(LiveContainer);
