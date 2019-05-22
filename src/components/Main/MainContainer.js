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
            loadTopGames,
            createWatching,
            loadChannels,
        } = this.props;
        //loadChannels();
        loadTopKChannels(8);
        loadTopGames();
        createWatching();
    }

    render() {
        return (
            <Main />
        )
    }
}

export default MainContainer = connect(

    (state) => ({channels: state.ChannelReducer }),
    {
        loadChannels: ChannelActions.loadChannels,
        loadTopKChannels: ChannelActions.loadTopKChannels,
        searchChannel: ChannelActions.searchChannel,
        loadTopGames: GameActions.loadTopGames,
        createWatching: WatchingActions.createWatching,
    }
)(MainContainer);
