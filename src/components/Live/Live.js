import React from 'react';
import styled from "styled-components";

const LiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
`;

const LiveContainer = styled.div`
    display: block;
    font-size: 10vmin;
    box-sizing: border-box;
    padding-top: 5vmin;
    //min-width:90vw 
    width: 70vw;
    height: 40vw;
    @media screen and (max-width:1000px) {
        width: 95vw;
        height: 60vw;
    }
`;

const TitleText = styled.div`
    display: block;
    font-weight: bold;
    overflow: hidden;
    height: 1.3em;    
    color: white;
`;
const InformationDiv = styled.div`
    display: flux;
    width: 100%;
    flex-direction: row;
`;
const TextContainer = styled.div`
    color: white;
    display: block;
`;
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
`;
const Logo = styled.img`
    width: 3em;
`;
class Live extends React.Component {
    render() {
        const {watchChannel} = this.props;
        console.log(watchChannel);
        const channelURL = `https://player.twitch.tv/?channel=${watchChannel.name}&muted=true&controls=true`;
        return (
            <LiveDiv>
                <LiveContainer>
                    <iframe
                        title={'liveVideo'}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        src={channelURL} allowFullScreen
                        //src = {url}
                    />
                </LiveContainer>
                <InformationDiv>
                    <LogoContainer>
                        <Logo alt={'logo'} src={watchChannel.imgURL}/>
                    </LogoContainer>
                    <TextContainer>
                        <TitleText>{watchChannel.title}</TitleText>
                        <div>{watchChannel.name}</div>
                        <div>{watchChannel.viewers} 位觀眾</div>
                    </TextContainer>
                </InformationDiv>
            </LiveDiv>

        );
    }
}

export default Live;
