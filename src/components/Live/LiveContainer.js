import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import Live from './Live';
import WatchingActions from "../../actions/WatchingActions";

class LiveContainer extends React.Component {

    componentDidMount() {
        const {
            watchChannel,
            channels,
            updateWatching,
        } = this.props;
        if (watchChannel.name === undefined && channels.size>0) {
            updateWatching(channels.get[0]);
        }
    }

    render() {
        const {
            watchChannel,
        } = this.props;
        return (
            <Route
                render={() =>
                    watchChannel.name ? (
                        <Live watchChannel={watchChannel} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/"
                            }}
                        />
                    )
                }
            />
        );
    }
}

export default LiveContainer = connect(
    (state) => ({
        channels: state.ChannelReducer,
        watchChannel: state.WatchingReducer,
    }),
    {
        updateWatching: WatchingActions.createWatching,
    }
)(LiveContainer);

