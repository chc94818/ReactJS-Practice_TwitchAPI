import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';

class SearchContainer extends React.Component {


    render() {
        const {
            channels
        } = this.props;
        //console.log('top');
        //console.log(Top);
        return (
            <Search channels={channels}/>

        );
    }
}

export default SearchContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
)(SearchContainer);