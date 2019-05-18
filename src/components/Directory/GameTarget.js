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
    font-size : 1.2vw;
    width: 10vw;
    margin: 1vw;
    @media screen and (max-width:500px) {
        width: 20vw;
    }
    
    color: white;
    cursor : pointer;
`;


class GameTarget extends React.Component{
    // linkHandler() {
    //     const{path, onSelect} = this.props;
    //     this.props.history.push(path);
    //     onSelect();
    // }
    render() {
        const{
            name,
            viewers,
            imageSrc,
        } = this.props;
        return(
                <TargetDiv>
                    <ImgContainer>
                        <Img alt={'game'} src = {imageSrc} />
                    </ImgContainer>
                    <div>{name}</div>
                    <div>{viewers} 位觀眾</div>
                </TargetDiv>
        );
    }
}

export default withRouter(GameTarget);
