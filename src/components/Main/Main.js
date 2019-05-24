import React from 'react';
import NavigatorContainer from '../Navigator/NavigatorContainer'
import HomeContainer from '../Home/HomeContainer'
import LiveContainer from '../Live/LiveContainer'
import DirectoryContainer from '../Directory/DirectoryContainer'
import {BrowserRouter, Route} from "react-router-dom"
import styled from 'styled-components'
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
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <BodyDiv>
                    <NavigatorContainer/>
                    <MainDiv>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/live" component={LiveContainer}/>
                        <Route exact path="/directory/search" component={SearchContainer}/>
                        <Route exact path="/directory" component={DirectoryContainer}/>
                    </MainDiv>
                </BodyDiv>
            </BrowserRouter>
        )
    }
}

export default Main;
