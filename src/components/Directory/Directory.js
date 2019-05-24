import React from 'react';
import styled from 'styled-components';
import DirectoryTarget from './DirectoryTarget';
import LoadButton from './LoadButton';
// const UL = styled.ul`
//     display: block;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     width: 98%;
//     list-style-type: none;
//     padding: 0;
// `;
const DirectoryDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const GameGrid = styled.div`
    display: grid;   
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3vmax 2vmax;
    @media screen and (max-width:1200px) {
         grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(2, 1fr);
    }
    padding: 0 5vmax;
    margin: 2vmax auto;
`;

class Directory extends React.Component {

    render() {

        const {
            games,
            onSelect,
            createChannels,
            updateGames,
            history,
            buttonSet,
        } = this.props;

        //console.log([...games][0]);
        const gamelist = games.map((game) => {
            return (
                <DirectoryTarget
                    key={game.id}
                    gameId={game.id}
                    name={game.name}
                    imageSrc={game.imgURL}
                    onSelect={onSelect}
                    createChannels={()=>createChannels(game.id)}
                    history={history}
                />
            );
        });

        return (
            <DirectoryDiv>
                <GameGrid>
                    {gamelist}
                </GameGrid>
                {buttonSet ? <LoadButton handler={updateGames}/>: ""}
            </DirectoryDiv>


        );
    }
}

export default Directory;
