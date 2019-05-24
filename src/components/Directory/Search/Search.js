import React from 'react';
import styled from "styled-components";
import ChannelTarget from "./SearchlTarget";
import LoadButton from "../LoadButton";

const SearchDiv = styled.div`
    display: flex;    
    flex-direction: column;
`;
const GameDiv = styled.div`
    display: flex;    
    flex-direction: row;
    position: relative;
    width: 100%;
    padding: 0 5vmax;
`;
const ImgContainer = styled.div`
    display: inline-block;
    width: 15%;
    overflow: hidden;
    margin-right: 20px;
    @media screen and (max-width:1200px) {
         width: 25%;
    }
    @media screen and (max-width:800px) {
         width: 40%;
    }
`;
const Img = styled.img`
    width: 100%;    
    box-sizing: border-box;
    border-radius: 5%;    
    border: solid 1px #6E6E6E;
    
`;
const TextContainer = styled.div`
    display: inline-block;
    color: white;
    font-size: 48px;
    @media screen and (max-width:1200px) {
         font-size: 32px;
    }
    @media screen and (max-width:800px) {
         font-size: 16px;
    }
`;

const ChannelGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3vmax 2vmax;
    @media screen and (max-width:1200px) {
         grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(1, 1fr);
    }
    padding: 0 5vmax;
    margin: 2vmax auto;
`;

class Search extends React.Component {
    renderGameTitle() {
        const {
            channels,
            gameName,
            gameImgURL,
        } = this.props;
        const views = channels.map((channel)=>channel.viewers);
        const totalViews = views.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return (
            <GameDiv >
                <ImgContainer>
                    <Img src={gameImgURL}/>
                </ImgContainer>
                <TextContainer>
                    <div>{gameName}</div>
                    <div>Viewers: {totalViews}</div>
                </TextContainer>
            </GameDiv>
        );
    }

    render() {

        const {
            channels,
            onSelect,
            updateChannels,
            updateWatching,
            history,
            buttonSet,
        } = this.props;
        const channelList = channels.map((channel) => {
            return (
                <ChannelTarget
                    key={channel.id}
                    channel={channel}
                    onSelect={onSelect}
                    updateWatching={() => updateWatching(channel)}
                    history={history}
                />
            );
        });

        return (
            <SearchDiv>
                {buttonSet ? this.renderGameTitle() : ""}
                <ChannelGrid>
                    {channelList}
                </ChannelGrid>
                {buttonSet ? <LoadButton handler={() => updateChannels()}/> : ""}
            </SearchDiv>
        );
    }
}

export default Search;
