import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';

class SearchContainer extends React.Component {

    render() {
        const {
            tops,
            range
        } = this.props;
        const sliceTop = range ? tops.slice(0, range) : tops;
        return (
            <Directory games={sliceTop}/>

        );
    }
}

export default SearchContainer = connect(
    (state) => ({tops: state.TopReducer}),
)(SearchContainer);