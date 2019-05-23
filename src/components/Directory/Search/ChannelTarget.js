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
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 15%;
    padding-top: 15%;
    margin-right: 2%;   
`;

const Logo = styled.img`
    position: absolute; /* Take your picture out of the flow */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; /* Make the picture taking the size of it's parent */
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
`;
const TextContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;    
    width: 80%;
    
    & *{
        margin: auto 0;
        height: 1.5vw;
        font-size: 1vw;
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
