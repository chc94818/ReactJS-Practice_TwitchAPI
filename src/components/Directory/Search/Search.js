import React from 'react';
import styled from "styled-components";
import ChannelTarget from "./ChannelTarget";

const UL = styled.ul`
    display: inline-flex;
    align-self: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    flex-content: center;
    justify-content: center;
    padding: 0;
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
                <li key={channel.id}>
                    <ChannelTarget
                        channel={channel}
                        onSelect={onSelect}
                        updateWatching={updateWatching}
                        history={history}
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
