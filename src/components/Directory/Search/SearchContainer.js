import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigatorActions from "../../../actions/NavigatorActions";
import ChannelActions from "../../../actions/ChannelActions";

class SearchContainer extends React.Component {


    render() {
        const {
            channels,
            onSelect,
            range,
            history,
        } = this.props;
        //console.log('top');
        //console.log(Top);
        const sliceChannels = range ? channels.slice(0, range) : channels;
        return (
            <Search
                channels={sliceChannels}
                onSelect={onSelect}
                history={history}
            />
        );
    }
}
export default withRouter(SearchContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        loadChannels: ChannelActions.loadChannels,
    }
)(SearchContainer));