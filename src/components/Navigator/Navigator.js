import React from 'react';
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

export default Navigator
