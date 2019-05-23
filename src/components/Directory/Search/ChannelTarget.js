import React from 'react';
import styled from 'styled-components';

const TargetDiv = styled.div`
    flex-direction: column;
    font-weight: bold;
    color: white;
    cursor : pointer;
`;

const ImgContainer = styled.div`
    position: relative;
    margin-bottom: 2px;
`;
const Img = styled.img`
    width: 100%;    
`;
const LiveText = styled.div`
    position: absolute;    
    background: red;
    color: white;
    padding: 0.1vw 0.4vw;
    top: 0.5vw;
    left: 0.5vw;
    height: 1.2vw;
    line-height: 1.2vw;
    vertical-align: middle;
`;
const InformationDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
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

class GameTarget extends React.Component {
    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const {
            channel,
            updateWatching,
            history,
            onSelect
        } = this.props;
        // link to /live
        history.push({pathname: `/live`});
        //console.log('click');
        //console.log(channel.name);
        updateWatching(channel);
        onSelect(-1);
    }

    render() {
        const {
            channel,
        } = this.props;

        //console.log(channel);
        return (
            <TargetDiv onClick={this.clickHandler}>
                <ImgContainer>
                    <LiveText>LIVE</LiveText>
                    <Img alt={'game'} src={channel.imgURL}/>
                </ImgContainer>
                <InformationDiv>
                    <LogoContainer>
                        <Logo alt={'logo'} src={channel.imgURL}/>
                    </LogoContainer>
                    <TextContainer>
                        <TitleText>{channel.title}</TitleText>
                        <ProfileText>{channel.name}</ProfileText>
                        <ProfileText>{channel.viewers} 位觀眾</ProfileText>
                    </TextContainer>
                </InformationDiv>

            </TargetDiv>
        );
    }
}

export default GameTarget;
