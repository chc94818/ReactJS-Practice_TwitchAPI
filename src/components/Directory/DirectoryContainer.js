import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigatorActions from "../../actions/NavigatorActions";
import ChannelActions from "../../actions/ChannelActions";

class SearchContainer extends React.Component {

    render() {
        const {
            tops,
            loadChannels,
            onSelect,
            range,
            history,
        } = this.props;
        const sliceTop = range ? tops.slice(0, range) : tops;
        return (
            <Directory
                games={sliceTop}
                onSelect={onSelect}
                loadChannels={loadChannels}
                history={history}
            />

        );
    }
}

export default withRouter(SearchContainer = connect(
    (state) => ({tops: state.TopReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        loadChannels: ChannelActions.loadChannels,
    }
)(SearchContainer));