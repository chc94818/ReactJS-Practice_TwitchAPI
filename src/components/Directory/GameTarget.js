import React from 'react';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';
import ChannelActions from "../../actions/ChannelActions";
import {connect} from "react-redux";

const ImgContainer = styled.div`
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
    
`;
const TargetDiv = styled.div`
    display: inline-block;
    box-sizing : border-box;
    font-size : 1.2vw;
    width: 10vw;
    margin: 1vw;
    @media screen and (max-width:500px) {
        width: 20vw;
    }
    
    color: white;
    cursor : pointer;
`;


class GameTarget extends React.Component {
    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    constructor(props) {
        super(props);
        this.clickHandeler= this.clickHandeler.bind(this);
    }

    clickHandeler() {
        const{
            history,
            name,
            loadChannels
        } = this.props;
        history.push('/directory/search');
        loadChannels(name);
    }
    render() {
        const {
            name,
            viewers,
            imageSrc,
        } = this.props;
        return (
            <TargetDiv onClick={this.clickHandeler}>
                <ImgContainer>
                    <Img alt={'game'} src={imageSrc}/>
                </ImgContainer>
                <div>{name}</div>
                <div>{viewers} 位觀眾</div>
            </TargetDiv>
        );
    }
}

export default withRouter(GameTarget= connect(
    null,
    {
        loadChannels: ChannelActions.loadChannels,
    }

)(GameTarget));
