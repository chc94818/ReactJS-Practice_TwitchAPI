import React from 'react';
import Navigator from '../Navigator/Navigator'
import Live from '../Live/Live'
import DirectoryContainer from '../Directory/DirectoryContainer'
import AxiosTest from '../AxiosTest'
import LiveTest from '../LiveTest'
import { BrowserRouter, Route } from "react-router-dom"
import styled from 'styled-components'
import {connect} from "react-redux";

import GameActions from "../../actions/GameActions";

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

class Main extends React.Component{
    componentDidMount() {
        this.props.loadGames();
    }
    render() {
        return (
            <BrowserRouter>
                <BodyDiv>
                    <Navigator />
                    <MainDiv>
                        <Route exact path="/" component={AxiosTest}/>
                        <Route exact path="/live" component={LiveTest} />
                        <Route exact path="/directory" component={DirectoryContainer} />

                    </MainDiv>
                </BodyDiv>
            </BrowserRouter>
        )
    }
}

export default Main = connect(
    undefined,
    {
        loadGames: GameActions.loadGames,
    }
)(Main);
