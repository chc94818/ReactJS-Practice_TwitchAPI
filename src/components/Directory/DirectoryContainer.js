import React from 'react';
import Directory from './Directory';
import {connect } from 'react-redux';

class DirectoryContainer extends React.Component{

    render() {
        const {
            games
        } = this.props;
        return(
            <Directory games = {games}/>

        );
    }
}

export default DirectoryContainer = connect(
    (state) => ({ games: state.GameReducer }),
)(DirectoryContainer);