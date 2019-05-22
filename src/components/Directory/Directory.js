import React from 'react';
import styled from "styled-components";
import GameTarget from "./GameTarget";

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    padding: 0;
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
                <li key={game.id}>
                    <GameTarget
                        game_id={game.id}
                        name={game.name}
                        imageSrc={game.imgURL}
                        onSelect={onSelect}
                        loadChannels={loadChannels}
                        history={history}
                    />
                </li>
            );
        });

        return (
            <UL>
                {gamelist}
            </UL>

        );
    }
}

export default Directory;
