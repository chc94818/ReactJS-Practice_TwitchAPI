import React from 'react';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.li`
    display: inline-block;
    ${props => props.selected ? 'border-bottom : solid white 0.3vmin;' : ''};
    box-sizing : border-box;
    font-size : 1.5vw;
    padding: 1vw 1vw;
    @media screen and (max-width : 800px){
        font-size : 3vmax;
        padding: 2vmax 3vmax;
    }
    margin: 0;
    color: ${props => props.selected ? 'white' : '#C9C9C9'};
    &:hover {
      color : white;
    }
    cursor : pointer;
`;


class LinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.linkHandler = this.linkHandler.bind(this);
    }

    linkHandler() {
        const {onSelect, path, history} = this.props;
        history.push(path);
        onSelect();
    }

    render() {
        const {title, selected} = this.props;
        //console.log(`${title} ${selected}`);
        return (
            <Button selected={selected} onClick={this.linkHandler}>{title}</Button>
        );
    }
}

export default withRouter(LinkButton);
