import React from 'react';
import styled from "styled-components";
import GameTarget from "./GameTarget";

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
`;

class Directory extends React.Component {

    render() {

        const {
            games
        } = this.props;
        const gamelist = games.map((game) => {
            //console.log(game);
            return (
                <li key={game.id}>
                    <GameTarget
                        name={game.name}
                        viewers={game.viewers}
                        imageSrc={game.imgURL}
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
