import React from 'react';
import styled from "styled-components";
import ChannelTarget from "./ChannelTarget";

const ChannelGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1vw 1vw;
    @media screen and (max-width:1200px) {
         grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(1, 1fr);
    }
    padding: 0 5vmax;
    margin: 2vmax auto;
`;

class Search extends React.Component {

    render() {

        const {
            channels,
            onSelect,
            updateWatching,
            history,
        } = this.props;
        const channelList = channels.map((channel) => {
            return (
                <ChannelTarget
                    key={channel.id}
                    channel={channel}
                    onSelect={onSelect}
                    updateWatching={updateWatching}
                    history={history}
                />
            );
        });

        return (
            <ChannelGrid>
                {channelList}
            </ChannelGrid>
        );
    }
}

export default Search;
