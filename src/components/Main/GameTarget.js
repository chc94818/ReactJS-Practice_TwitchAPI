import React from 'react';
import {withRouter, link} from "react-router-dom";
import styled from 'styled-components';

const ImgContainer = styled.div`
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
    
`;
const TargetDiv = styled.div`
    display: inline-block;
    box-sizing : border-box;
    font-size : 1.5vmin;
    width: 20vmin;
    margin: 2vmin;
    color: white;
    cursor : pointer;
`;


class GameTarget extends React.Component{
    constructor(props) {
        super(props);

    }

    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    render() {
        const{
            name,
            popularity,
            imageSrc,
        } = this.props;
        return(
                <TargetDiv>
                    <ImgContainer>
                        <Img alt={'game'} src = {imageSrc} />
                    </ImgContainer>
                    <div>{name}</div>
                    <div>{popularity}位觀眾</div>
                </TargetDiv>
        );
    }
}

export default withRouter(GameTarget);
