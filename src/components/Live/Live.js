import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

const LiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
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
        const {channels} = this.props;

        console.log(channels.get(5) ? channels.get(5).name : 1);
        const name = channels.get(5) ? channels.get(5).name : 'westdoor';
        const url = `https://player.twitch.tv/?channel=${name}&muted=true&controls=true`;
        console.log(url);
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

                        src={url} allowFullScreen
                        //src = {url}
                    />
                </LiveContainer>
            </LiveDiv>
        );
    }
}

export default Live = connect(
    (state) => ({channels: state.ChannelReducer}),
)(Live);
