import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigatorActions from "../../actions/NavigatorActions";
import ChannelActions from "../../actions/ChannelActions";
import GameActions from "../../actions/GameActions";

class DirectoryContainer extends React.Component {

    render() {
        const {
            topGames,
            createChannels,
            updateGames,
            onSelect,
            range,
            history,
            buttonSet,
        } = this.props;

        const sliceGames = range ? topGames.slice(0, range) : topGames;
        return (
            <Directory
                games={sliceGames}
                onSelect={(linkTo) => onSelect(linkTo)}
                createChannels={(gameId) => createChannels(gameId, 48)}
                updateGames={() => updateGames(24)}
                history={history}
                buttonSet={buttonSet}
            />

        );
    }
}

DirectoryContainer.propTypes = {
    //placeholder: PropTypes.string.isRequired,
};
DirectoryContainer.defaultProps = {
    buttonSet: true,
};

export default withRouter(DirectoryContainer = connect(
    (state) => ({topGames: state.GameReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        createChannels: ChannelActions.createChannels,
        updateGames: GameActions.updateGames,
    }
)(DirectoryContainer));