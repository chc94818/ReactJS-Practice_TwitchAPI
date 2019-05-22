import React from 'react';
import styled from 'styled-components';
const TargetDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing : border-box;
    font-size : 1vw;
    width: 20vw;
    margin: 1em;
    min-width: 15em;    
    @media screen and (max-width:1200px) {
        width: 40vw;        
        font-size : 1.4vw;
    }
    color: white;
    cursor : pointer;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
    
`;
const LiveText = styled.div`
    position: absolute;    
    display: inline-block;
    color: white;
    height: 1.2vw;
    padding: 0.1vw 0.4vw;
    top: 0.5vw;
    left: 0.5vw;
    background: red;
    line-height: 1.2vw;
    vertical-align: middle;
`;
const InformationDiv = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5em;
`;

const Logo = styled.img`
    width: 3em;
`;
const TextContainer = styled.div`
    display: block;
`;

const TitleText = styled.div`
    display: block;
    font-weight: bold;
    overflow: hidden;
    height: 1.4em;    
    color: white;
`;
const ProfileText = styled.div`
    display: block;
    overflow: hidden;
    height: 1.4em;    
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
