import React from 'react';
import styled from "styled-components";
import StreamTarget from "./ChannelTarget";

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
                    <StreamTarget
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
