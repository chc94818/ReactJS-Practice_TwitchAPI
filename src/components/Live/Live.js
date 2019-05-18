import React from 'react';
import styled from "styled-components";

const LiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const LiveContainer = styled.div`
    display: block;
    font-size: 10vmin;
    
    width: 60vw;
    height: 33.75vw;
    @media screen and (max-width:500px) {
        width: 90vw;
        height: 50.625vw;
    }
`;

class Live extends React.Component{
    render() {
        return(
            <LiveDiv>
                <LiveContainer>
                    <iframe
                        title={'liveVideo'}
                        style={{width:'100%', height:'100%', border: 'none'}}
                        src="https://www.youtube.com/embed/lwkM50LpVG0?loop=1&playlist=lwkM50LpVG0" allowFullScreen
                    />
                </LiveContainer>
            </LiveDiv>
        );
    }
}

export default Live;
