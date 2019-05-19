import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Live from '../Live/Live'
import SearchContainer from '../Directory/Search/SearchContainer'
import DirectoryContainer from '../Directory/DirectoryContainer';

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    //background: red;
    align-items: center;
`;

const LiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    //border: solid 1em blue;
    justify-content: center;
    align-items: center;
`;
const RecommendDiv = styled.div`
    display: flex;
    flex-direction: column;
    //border: solid 1em green;
    justify-content: center;
    align-items: center;
`;

const RecommendClassDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;
const RecommendTopDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const RecommnedTitleDiv = styled.div`
    display: block;
    font-size: 2em;
    margin: 0;
    width: 90vw;
    text-align: center;
    border-top: solid 0.05em white;
    color: white;
`;

const LiveContainer = styled.div`
    display: block;
    font-size: 10vmin;
    box-sizing: border-box;
    padding: 5vmin;
    //min-width:90vw 
    width: 40vw;
    height: 22.5vw;
`;


class Home extends React.Component {
    render() {
        const RecommendClassRangeLimit = 8;
        const RecommendTopRangeLimit = 8;
        const {channels, location} = this.props;
        const randomId = Live.getRandom(0, channels.size);
        const randomStreamer = channels.get(randomId) ? channels.get(randomId).name : 'westdoor';
        const name = location.streamer ? location.streamer : randomStreamer;
        const url = `https://player.twitch.tv/?channel=${name}&muted=true&controls=true`;
        //console.log(url);
        return (

            <HomeDiv>
                <LiveDiv>
                    LiveDiv
                </LiveDiv>
                <RecommendDiv>
                    <RecommendClassDiv>
                        <RecommnedTitleDiv>推薦的分類</RecommnedTitleDiv>
                        <DirectoryContainer range={RecommendClassRangeLimit}/>
                    </RecommendClassDiv>
                    <RecommendTopDiv>
                        <RecommnedTitleDiv>推薦的頻道</RecommnedTitleDiv>
                        <SearchContainer range={RecommendTopRangeLimit}/>
                    </RecommendTopDiv>
                </RecommendDiv>
            </HomeDiv>
        );
    }
}

export default Home = connect(
    (state) => ({channels: state.ChannelReducer}),
)(Home);
