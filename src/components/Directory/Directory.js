import React from 'react';
import styled from "styled-components";
import GameTarget from "./GameTarget";

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    padding:0;
    justify-content: center;
    align-items: center;
    list-style-type: none;
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
                        name={game.name}
                        viewers={game.viewers}
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
