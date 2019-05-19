import React from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import NavigatorActions from "../../actions/NavigatorActions";

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

const linkButtons = [
    {title: 'N', path: '/'},
    {title: '首頁', path: '/'},
    {title: '直播', path: '/live'},
    {title: '瀏覽', path: '/directory'},
];
const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.props.onSelect(this.initialSelected());
    }

    initialSelected() {
        const pathSplit = this.props.location.pathname.split("/");
        const pathRoot = pathSplit ? `/${pathSplit[1]}` : `/`;
        const pathId = linkButtons.findIndex((b) => b.path === pathRoot);
        return pathId ? pathId : 1;
    }

    render() {
        const {onSelect, selectedId} = this.props;
        // console.log('select: ' + selectedId);
        const NavigatorButton = linkButtons.map((linkButton, index) => (
            <LinkButton
                key={generateKey(linkButton.title)}
                path={linkButton.path
                } title={linkButton.title}
                selected={index === selectedId}
                onSelect={index < 1 ? onSelect.bind(null, 1) : onSelect.bind(null, index)}
            />
        ));
        return (
            <NavigatorDiv>
                <UL>
                    {NavigatorButton}
                </UL>
            </NavigatorDiv>

        );
    }
}

export default withRouter(Navigator = connect(
    (state) => ({selectedId: state.NavigatorReducer}),
    {
        onSelect: NavigatorActions.onSelect,
    }
)(Navigator));
