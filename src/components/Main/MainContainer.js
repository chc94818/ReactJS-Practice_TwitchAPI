import React from 'react';
import Main from './Main';
import {connect} from "react-redux";
import GameActions from "../../actions/GameActions";
import ChannelActions from "../../actions/ChannelActions";
import WatchingActions from "../../actions/WatchingActions";

class MainContainer extends React.Component {
    componentDidMount() {
        const {
            loadTopKChannels,
            createGames,
            createWatching,
        } = this.props;
        loadTopKChannels(8);
        createGames(16);
        createWatching();
    }

    render() {
        return (
            <Main/>
        )
    }
}

export default MainContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        loadTopKChannels: ChannelActions.loadTopKChannels,
        createGames: GameActions.createGames,
        createWatching: WatchingActions.createWatching,
    }
)(MainContainer);
