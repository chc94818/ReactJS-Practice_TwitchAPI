import React from 'react';
import styled from 'styled-components';

const ControlDiv = styled.div`
    &{
        display: block;
        position: absolute;
        cursor: pointer;
        width: ${props => 55 * (0.8 ** Math.abs(props.order)) + "%"};
        padding-bottom: ${props => 30 * (0.8 ** Math.abs(props.order)) + "%"};
        @media screen and (max-width:800px) {
            width: 100%;
            padding-bottom: 56.25%;
        }  
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        z-index: 10;
    }
    
    ${props => (
    (props.order !== 0) ?
        `   & {    
                @media screen and (max-width:800px) {
                    display: none;
                }            
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
    position: absolute;
    width: 100%;
    height: 100%;  
`;


class HomeLive extends React.Component {


    renderLoaded() {
        const {order, channel} = this.props;
        return (order === 0 ?
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
