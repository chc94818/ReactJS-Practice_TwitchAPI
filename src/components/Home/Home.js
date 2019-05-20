import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../Directory/Search/SearchContainer'
import DirectoryContainer from '../Directory/DirectoryContainer';
import MultiLivesContainer from './MultiLivesContainer'
const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    //background: red;
    align-items: center;
`;

const RecommendLiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vmax;
    @media screen and (max-width:1000px) {
        height: 60vmax;
    }
    margin: 1vmax 0;
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

const GameDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;
const ChannelDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleDiv = styled.div`
    display: block;
    font-size: 2em;
    margin: 0;
    width: 90vw;
    text-align: center;
    border-top: solid 0.05em white;
    color: white;
`;

class Home extends React.Component {
    render() {
        const {
            liveNum,
            recommendClassNum,
            recommendTopNum,
        } = this.props;
        return (
            <HomeDiv>
                <RecommendLiveDiv>
                    <MultiLivesContainer liveNum={liveNum}/>
                </RecommendLiveDiv>
                <RecommendDiv>
                    <GameDiv>
                        <TitleDiv>推薦的分類</TitleDiv>
                        <DirectoryContainer range={recommendClassNum}/>
                    </GameDiv>
                    <ChannelDiv>
                        <TitleDiv>推薦的頻道</TitleDiv>
                        <SearchContainer range={recommendTopNum}/>
                    </ChannelDiv>
                </RecommendDiv>
            </HomeDiv>
        );
    }
}

export default Home;
