import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigatorActions from "../../actions/NavigatorActions";
import ChannelActions from "../../actions/ChannelActions";

class SearchContainer extends React.Component {

    render() {
        const {
            topGames,
            loadChannels,
            onSelect,
            range,
            history,
        } = this.props;

        const sliceGames = range ? topGames.slice(0, range) : topGames;
        //console.log(sliceGames);
        return (
            <Directory
                games={sliceGames}
                onSelect={onSelect}
                loadChannels={loadChannels}
                history={history}
            />

        );
    }
}

export default withRouter(SearchContainer = connect(
    (state) => ({topGames: state.GameReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        loadChannels: ChannelActions.loadChannels,
    }
)(SearchContainer));