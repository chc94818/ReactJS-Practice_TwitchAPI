import React from 'react';
import {connect} from 'react-redux';
import Home from './Home'

const CLASS_LIMIT = 8;
const TOP_LIMIT = 8;

class HomeContainer extends React.Component {
    render() {
        return (
            <Home
                liveNum={5}
                recommendClassNum={CLASS_LIMIT}
                recommendTopNum={TOP_LIMIT}
            />
        );
    }
}

export default HomeContainer;
