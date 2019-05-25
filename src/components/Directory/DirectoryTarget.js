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
    background: #5E5E5E;
    &:hover {
      background: #6E6E6E;
    }
`;

const ImgContainer = styled.div`
`;
const Img = styled.img`
    width: 100%;    
`;

const GameTitle = styled.div`    
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

class DirectoryTarget extends React.Component {
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
            gameId,
            createChannels,
            onSelect,
            name,
            imageSrc,
        } = this.props;
        createChannels();
        onSelect(2);
        history.push('/directory/search', {
            gameId: gameId,
            gameName: name,
            gameImgURL: imageSrc,
        });
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

export default DirectoryTarget;
