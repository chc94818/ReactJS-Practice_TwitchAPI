import React from 'react';
import styled from "styled-components";
import GameTarget from "./GameTarget";

// const UL = styled.ul`
//     display: block;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     width: 98%;
//     list-style-type: none;
//     padding: 0;
// `;

const GameGrid = styled.div`
    display: grid;   
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1vw 1vw;
    @media screen and (max-width:1200px) {
         grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:500px) {
         grid-template-columns: repeat(1, 1fr);
    }
    padding: 0 5vmax;
    margin: 2vmax auto;
`;

class Directory extends React.Component {

    render() {

        const {
            games,
            onSelect,
            loadChannels,
            history,
        } = this.props;
        const gamelist = games.map((game) => {
            //console.log(game);
            return (
                <GameTarget
                    key={game.id}
                    game_id={game.id}
                    name={game.name}
                    imageSrc={game.imgURL}
                    onSelect={onSelect}
                    loadChannels={loadChannels}
                    history={history}
                />
            );
        });

        return (
            <GameGrid>
                {gamelist}
            </GameGrid>

        );
    }
}

export default Directory;
