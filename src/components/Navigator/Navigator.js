import React from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const NavigatorDiv = styled.div`    
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
    background: #4F4FFF;
    flex-direction: row;
    justify-content: flex-start;
`;

class Navigator extends React.Component {
    render() {
        const {onSelect, selectedId, linkButtons} = this.props;
        // console.log('select: ' + selectedId);
        const NavigatorButton = linkButtons.map((linkButton, index) => (
            <LinkButton
                key={index}
                path={linkButton.path
                } title={linkButton.title}
                selected={index === selectedId}
                onSelect={index < 1 ? onSelect.bind(this, 1) : onSelect.bind(this, index)}
            />
        ));
        return (
            <NavigatorDiv>
                {NavigatorButton}
            </NavigatorDiv>

        );
    }
}

export default Navigator
