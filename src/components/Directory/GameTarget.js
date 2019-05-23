import React from 'react';
import styled from 'styled-components';


const TargetDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1em;
    font-weight: bold;
    color: white;
    cursor : pointer;
`;

const ImgContainer = styled.div`
    margin-bottom: 2px;
`;
const Img = styled.img`
    width: 100%;    
`;

const GameTitle= styled.div`
    white-space: wrap;
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
        loadChannels(game_id,24);
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
