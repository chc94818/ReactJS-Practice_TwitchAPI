import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


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


class LiveTest extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: 1,
            rsobj: {},
            isLoaded: false,
            error: null,
        };
        this.axiosRequest = this.axiosRequest.bind(this);
    }
    componentDidMount() {
        this.axiosRequest();
    }
    axiosRequest(){
        const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
        axios.get(
            `https://api.twitch.tv/kraken/streams`,
            {headers: {
                    'Client-ID': client_id,
                }}
        )
            .then(response => {
                //console.log(response.data);
                this.setState({
                    isLoaded: true,
                    rsobj: response.data,
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    isLoaded : true,
                    error : true,
                });
            });
    }

    render(){
        const { isLoaded, error, rsobj } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                //{/*<ImgContainer>*/}
                //{/*    <Img alt="good" src = {rsobj.featured[1].image} />*/}
                //{/*</ImgContainer>*/}
                //<p style={{color:'white'}}>{JSON.stringify(rsobj.top[0].game.name)}</p>
                <LiveDiv>
                    <LiveContainer>
                        <iframe
                            title={'liveVideo'}
                            style={{width:'100%', height:'100%', border: 'none'}}
                            src={'https://player.twitch.tv/?channel=westdoor'} allowFullScreen
                        />
                    </LiveContainer>
                </LiveDiv>
                //<div>
                //    <h3 style={{color:'white'}}>{JSON.stringify(rsobj._links.self)}</h3>
                //</div>
                //<p style={{color:'white'}}>{rsobj.top[0].game}</p>
                //<p>{rsobj.headers.Host}</p>
            );
        }
    }
}
export default LiveTest;