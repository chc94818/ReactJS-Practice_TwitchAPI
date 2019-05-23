import React from 'react';
import styled from 'styled-components';


const TargetDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0;
    font-weight: bold;    
    min-width: 100px;
    color: white;
    cursor : pointer;
`;

const ImgContainer = styled.div`
`;
const Img = styled.img`
    width: 100%;    
`;

const GameTitle = styled.div`
    background: #5E5E5E;
    border-style: solid;
    border-width: 0 1px 1px 1px;    
    border-color: #737373;
    font-size: 16px;  
    line-height: 24px;  
    height: 48px;
    padding-top: 2px;
    @media screen and (max-width:1200px) {
        font-size: 12px;
        line-height: 18px;
        height: 36px;
    }
    @media screen and (max-width:800px) {
        font-size: 8px;
        line-height: 12px;
        height: 24px;
    }
    overflow: hidden;
    white-space: normal;
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
            history,
            game_id,
            loadChannels,
            onSelect,
        } = this.props;
        loadChannels(game_id, 24);
        onSelect(2);
        history.push('/directory/search');
    }

    render() {
        const {
            name,
            imageSrc,
        } = this.props;
        return (
            <TargetDiv onClick={this.clickHandler}>
                <ImgContainer>
                    <Img alt={'game'} src={imageSrc}/>
                </ImgContainer>
                <GameTitle>{name}</GameTitle>
            </TargetDiv>
        );
    }
}

export default GameTarget;
