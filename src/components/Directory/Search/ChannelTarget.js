import React from 'react';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';
import ChannelActions from "../../../actions/ChannelActions";
import {connect} from "react-redux";

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
    display: inline-block;
    font-weight: bold;
    color: white;
`;

class ChannelTarget extends React.Component {
    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            name,
            displayName,
            viewers,
            imageSrc,
        } = this.props;
        return (
            <TargetDiv>
                <ImgContainer>
                    <LiveText>Live</LiveText>
                    <Img alt={'snapShot'} src={imageSrc}/>
                </ImgContainer>
                <TitleText>{title}</TitleText>
                <div>{`${displayName} (${name})`}</div>
                <div>{viewers} 位觀眾</div>
            </TargetDiv>
        );
    }
}

export default withRouter(ChannelTarget = connect(
    null,
    {
        loadChannels: ChannelActions.loadChannels,
    }
)(ChannelTarget));
