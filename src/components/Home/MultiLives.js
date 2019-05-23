import React from 'react';
import HomeLive from './HomeLive';
import styled from "styled-components";

const LiveDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

class MultiLives extends React.Component {
    render() {
        const {
            channels,
            orders,
            onClickLive,
        } = this.props;
        const lives = orders.map((order, index)=>{
                return <HomeLive key={index} channel={channels? channels[index]: undefined} order={order} onClickLive={onClickLive}/>
            }
        );
        return (
            <LiveDiv>
                {lives}
            </LiveDiv>

        );
    }
}

export default MultiLives;

