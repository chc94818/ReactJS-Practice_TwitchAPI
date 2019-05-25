import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.div`    
    display: block;    
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #4E4E4E;
    text-align: center;
    padding: 5px 0px 10px 0px;
    color: #C9C9C9;
    @media (hover:hover) {
        :hover {
        background: #6E6E6E;
        color : white;
        }
    }
    
    cursor : pointer;
`;

const LoadArrow = styled.div`
    display: inline-block;
    width: 20px;
    padding-bottom: 20px;
    border-top: solid 5px;
    border-left: solid 5px;
    transform: rotate(225deg);
`;

class LoadButton extends React.Component {

    render() {
        const{
            handler
        } = this.props;
        return (
            <ButtonContainer
                onClick={handler}
            >
                <LoadArrow/>
            </ButtonContainer>
        );
    }
}

export default LoadButton;
