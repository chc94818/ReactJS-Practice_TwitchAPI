import React from 'react';
import styled from "styled-components";

const TargetDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    cursor : pointer;
    font-size: 0;
    width: 60%
    @media screen and (max-width:1200px) {
        width: 80%;
    }
    @media screen and (max-width:800px) {
        width: 100%;
    }  
    
`;

const LiveContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
`;
const InformationDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #5E5E5E;
    border: solid 2px #737373
    border-style: solid;    
    border-width: 0 1px 1px 1px;    
    border-color: #737373;
    font-size: 12px;
    padding-top: 10px;
    @media screen and (max-width:1200px) {
        font-size: 10px;
    }
    @media screen and (max-width:800px) {
         font-size: 8px;
    }
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 5em;
    padding-top: 5em;
    margin-right: 2%;   
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;    
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
`;
const TextContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;    
    width: 80%;
    & *{
        margin: auto 0;
        height: 1.5em;
        line-height: 1.5em;
        font-size: 1em;        
        overflow: hidden;
    }
`;

const TitleText = styled.div`
    font-weight: bold;
    color: white;
    
    
`;
const ProfileText = styled.div`
    color: white;
`;
class Live extends React.Component {
    render() {
        const {watchChannel} = this.props;
        console.log(watchChannel);
        const channelURL = `https://player.twitch.tv/?channel=${watchChannel.name}&muted=true&controls=true`;
        return (
            <TargetDiv onClick={this.clickHandler}>
                <LiveContainer>
                    <iframe
                        title={'liveVideo'}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        src={channelURL}
                        allowFullScreen
                    />
                </LiveContainer>
                <InformationDiv>
                    <LogoContainer>
                        <Logo alt={'logo'} src={watchChannel.imgURL}/>
                    </LogoContainer>
                    <TextContainer>
                        <TitleText>{watchChannel.title}</TitleText>
                        <ProfileText>{watchChannel.name}</ProfileText>
                        <ProfileText>{watchChannel.viewers} 位觀眾</ProfileText>
                    </TextContainer>
                </InformationDiv>
            </TargetDiv>

        );
    }
}

export default Live;
