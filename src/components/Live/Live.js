import React from 'react';
import styled from "styled-components";

const LiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    //justify-content: center;
    align-items: center;
`;

const LiveContainer = styled.div`
    display: block;
    font-size: 10vmin;
    box-sizing: border-box;
    padding: 5vmin;
    //min-width:90vw 
    width: 80vw;
    height: 45vw;
`;


class Live extends React.Component {
    render() {
        const {watchChannel} = this.props;

        const channelURL = `https://player.twitch.tv/?channel=${watchChannel.name}&muted=true&controls=true`;
        return (
            <LiveDiv>
                <LiveContainer>
                    <iframe
                        title={'liveVideo'}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        src={channelURL} allowFullScreen
                        //src = {url}
                    />
                </LiveContainer>
            </LiveDiv>
        );
    }
}

export default Live;
