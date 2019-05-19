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
    static getRandom(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    render() {
        const {liveURL} = this.props;
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

                        src={liveURL} allowFullScreen
                        //src = {url}
                    />
                </LiveContainer>
            </LiveDiv>
        );
    }
}

export default Live;
