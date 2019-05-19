import React from 'react';
import Navigator from '../Navigator/Navigator'
import Home from '../Home/Home'
import Live from '../Live/Live'
import DirectoryContainer from '../Directory/DirectoryContainer'
import {BrowserRouter, Route} from "react-router-dom"
import styled from 'styled-components'
import {connect} from "react-redux";

//import GameActions from "../../actions/GameActions";
import TopActions from "../../actions/TopActions";
import ChannelActions from "../../actions/ChannelActions";
import SearchContainer from "../Directory/Search/SearchContainer";

const BodyDiv = styled.div`
    display: flex;
    background: #3B3B3B;
    
    flex-direction: column;
    min-width : 100vw;
    min-height : 100vh;
`;
const MainDiv = styled.div`
    display: flex;
    background: #3B3B3B;
    
    width : 100vw;
    justify-content: center;
    align-items: center;
`;

class Main extends React.Component {
    componentDidMount() {
        this.props.loadChannels('League of Legends');
        this.props.loadTops();
    }

    render() {
        return (
            <BrowserRouter>
                <BodyDiv>
                    <Navigator/>
                    <MainDiv>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/live" component={Live}/>

                        <Route exact path="/directory/search" component={SearchContainer}/>
                        <Route exact path="/directory" component={DirectoryContainer}/>
                    </MainDiv>
                </BodyDiv>
            </BrowserRouter>
        )
    }
}

export default Main = connect(
    undefined,
    {
        loadChannels: ChannelActions.loadChannels,
        loadTops: TopActions.loadTops
    }
)(Main);
