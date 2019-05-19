import React from 'react';
import styled from 'styled-components';
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
//
// const LiveContainer = styled.div`
//     display: block;
//     font-size: 10vmin;
//     box-sizing: border-box;
//     padding: 5vmin;
//     //min-width:90vw
//     width: 40vw;
//     height: 22.5vw;
// `;


class Home extends React.Component {
    render() {
        const {
            recommendClassNum,
            recommendTopNum,
        } = this.props;
        return (
            <HomeDiv>
                <LiveDiv>
                    LiveDiv
                </LiveDiv>
                <RecommendDiv>
                    <RecommendClassDiv>
                        <RecommnedTitleDiv>推薦的分類</RecommnedTitleDiv>
                        <DirectoryContainer range={recommendClassNum}/>
                    </RecommendClassDiv>
                    <RecommendTopDiv>
                        <RecommnedTitleDiv>推薦的頻道</RecommnedTitleDiv>
                        <SearchContainer range={recommendTopNum}/>
                    </RecommendTopDiv>
                </RecommendDiv>
            </HomeDiv>
        );
    }
}

export default Home;
