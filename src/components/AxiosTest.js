import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import GameTarget from "./Main/GameTarget";



const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
`;
class AxiosTest extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: 1,
            rsobj: {},
            isLoaded: false,
            error: null,
        };
        this.axiosRequest = this.axiosRequest.bind(this);
        this.axiosRequestTest = this.axiosRequestTest.bind(this);
    }
    componentDidMount() {
        //this.axiosRequest();
        this.axiosRequestTest()
    }
    axiosRequestTest(){
        const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
        axios.get(
            //`https://api.twitch.tv/kraken/games/top?&limit=${20}&offset=${5}`,
            `https://api.twitch.tv/kraken/games/top?&limit=${50}`,
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
    axiosRequest(){
        const client_id = 'o327iy2ljxbybzqkl479p82yhum9yh';
        axios.get(
            `https://api.twitch.tv/kraken/streams/featured`,
            {headers: {'Client-ID': client_id}}
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
            const gamelist = rsobj.top.map((list)=>(
                <li key={list.game._id}>
                    <GameTarget
                        name={list.game.name}
                        popularity = {list.game.popularity}
                        imageSrc = {list.game.box.large}
                    />
                </li>));
            return (
                //{/*<ImgContainer>*/}
                //{/*    <Img alt="good" src = {rsobj.featured[1].image} />*/}
                //{/*</ImgContainer>*/}
                //<p style={{color:'white'}}>{JSON.stringify(rsobj.top[0].game.name)}</p>
                <div>
                    <UL>
                        {gamelist}
                    </UL>
                    <p>{JSON.stringify(rsobj.top[0].game.box.large)}</p>


                </div>
                //<p style={{color:'white'}}>{rsobj.top[0].game}</p>
                //<p>{rsobj.headers.Host}</p>
            );
        }
    }
}
export default AxiosTest;