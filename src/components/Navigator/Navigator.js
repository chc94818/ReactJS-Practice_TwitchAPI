import React from 'react';
//import {withRouter, Link} from "react-router-dom";
import styled from 'styled-components';
import LinkButton from './LinkButton';

const NavigatorDiv = styled.div`
    
    display: flex;
    background: #4F4FFF;
    flex-direction: row;
    justify-content: flex-start;
`;
const UL = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const linkButtons=[
    {title:'N', path:'/'},
    {title:'首頁', path:'/'},
    {title:'直播', path:'/live'},
    {title:'瀏覽', path:'/directory'},
];
const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

class Navigator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectId: 1,
        };
    }
    onSelect(id){
        this.setState({selectId: id});
    }
    render() {
        const NavigatorButton = linkButtons.map((linkButton, index) => (
            <LinkButton
                key={generateKey(linkButton.title)}
                path={linkButton.path
                } title={linkButton.title}
                selected={index===this.state.selectId}
                onSelect={this.onSelect.bind(this, index>0? index:1)}
            />
        ));
        return(
            <NavigatorDiv>
                <UL>
                    {NavigatorButton}
                </UL>
            </NavigatorDiv>

        );
    }
}

export default Navigator;
