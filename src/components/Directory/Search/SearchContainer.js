import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';

class SearchContainer extends React.Component {


    render() {
        const {
            channels,
            range
        } = this.props;
        //console.log('top');
        //console.log(Top);
        const sliceChannels = range ? channels.slice(0, range) : channels;
        return (
            <Search channels={sliceChannels}/>
        );
    }
}

export default SearchContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
)(SearchContainer);