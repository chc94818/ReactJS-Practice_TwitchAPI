import React from 'react';
import styled from "styled-components";
import ChannelTarget from "./ChannelTarget";

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;

class Search extends React.Component {

    render() {

        const {
            channels
        } = this.props;
        const channelList = channels.map((channel) => {
            //console.log(game);
            return (
                <li key={channel.id}>
                    <ChannelTarget
                        title={channel.title}
                        name={channel.name}
                        displayName={channel.displayName}
                        viewers={channel.viewers}
                        imageSrc={channel.snapShotURL}
                        logoSrc={channel.logoURL}
                    />
                </li>
            );
        });

        return (
            <UL>
                {channelList}
            </UL>
        );
    }
}

export default Search;
