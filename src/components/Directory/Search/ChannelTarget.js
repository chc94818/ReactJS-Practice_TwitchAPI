import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
    
`;
const TargetDiv = styled.div`
    display: inline-block;
    box-sizing : border-box;
    font-size : 0.8vw;
    width: 20vw;
    margin: 1vw;
    @media screen and (max-width:1200px) {
        width: 40vw;
        font-size : 1.4vw;
    }
    
    color: white;
    cursor : pointer;
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
const TitleText = styled.div`
    display: block;
    font-weight: bold;
    overflow: hidden;
    height: 1.3em;    
    color: white;
`;
const InformationDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const TextContainer = styled.div`
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

class ChannelTarget extends React.Component {
    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        const{
            name,
            history,
            onSelect
        } = this.props;
        // link to /live
        history.push({pathname: `/live`, streamer: name});
        onSelect(2);
    }
    render() {
        const {
            title,
            name,
            displayName,
            viewers,
            imageSrc,
            logoSrc,
        } = this.props;
        return (
            <TargetDiv onClick={this.clickHandler}>
                <ImgContainer>
                    <LiveText>Live</LiveText>
                    <Img alt={'snapShot'} src={imageSrc}/>
                </ImgContainer>
                <InformationDiv>
                    <LogoContainer>
                        <Logo alt={'logo'} src={logoSrc}/>
                    </LogoContainer>
                    <TextContainer>
                        <TitleText>{title}</TitleText>
                        <div>{`${displayName} (${name})`}</div>
                        <div>{viewers} 位觀眾</div>
                    </TextContainer>
                </InformationDiv>

            </TargetDiv>
        );
    }
}

export default ChannelTarget;
