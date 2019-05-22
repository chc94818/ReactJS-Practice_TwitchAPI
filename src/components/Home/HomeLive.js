import React from 'react';
import styled from 'styled-components';
const ControlDiv = styled.div`
    &{
        display: block;
        position: absolute;
        cursor: pointer;
        width: ${props => props.order === 0 ? "50em" : 50 * (0.8 ** Math.abs(props.order)) + "em"};
        height: ${props => props.order === 0 ? "28.125em" : 28.125 * (0.8 ** Math.abs(props.order)) + "em"};
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        z-index: 10;
    }
    
    ${props => (
    (props.order !== 0) ?
        `   & {                
                filter: brightness(50%);
                z-index: ${10 - Math.abs(props.order)};
                transform: translate(${-50 + props.order * 30}%,-50%);
            }
            &:hover {                
                filter: brightness(100%);
                transition-duration: 0.2s;
                transform: translate(${-50 + props.order * 30}%,-50%) scale(1.05, 1.05);                
            }
            
            `
        :
        ''
)};
`;

const LiveContainer = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    //min-width:90vw     
`;


class HomeLive extends React.Component {


    renderLoaded() {
        const {order, channel} = this.props;
        return (order ===0 ?
                <iframe
                    title={'liveVideo'}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                    src={`https://player.twitch.tv/?channel=${channel.name}&muted=true&controls=true&autoplay=true`}
                    allowFullScreen
                    //src = {url}
                /> :
                <img
                    style={{width: '100%', height: '100%'}}
                    alt={'snapShot'}
                    src={channel.imgURL}/>
        );
    }

    render() {
        const {
            channel,
            order,
            onClickLive,
        } = this.props;
        //console.log(channel);
        const loaded = !!channel;
        return (
            <ControlDiv
                order={order}
                onClick={() => onClickLive(order, channel)}
            >
                <LiveContainer>
                    {loaded ? this.renderLoaded() : ""}
                </LiveContainer>
            </ControlDiv>
        );
    }
}

export default HomeLive;
