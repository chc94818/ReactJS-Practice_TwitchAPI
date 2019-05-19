import React from 'react';
import Main from './Main';
import {connect} from "react-redux";
import TopActions from "../../actions/TopActions";
import ChannelActions from "../../actions/ChannelActions";

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.loadTopKChannels(8);
        this.props.loadTops();
    }

    render() {
        return (
            <Main />
        )
    }
}

export default MainContainer = connect(
    undefined,
    {
        loadTopKChannels: ChannelActions.loadTopKChannels,
        loadTops: TopActions.loadTops
    }
)(MainContainer);
