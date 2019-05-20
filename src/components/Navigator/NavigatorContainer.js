import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Navigator from './Navigator';
import NavigatorActions from "../../actions/NavigatorActions";

const linkButtons = [
    {title: 'N', path: '/'},
    {title: '首頁', path: '/'},
    {title: '瀏覽', path: '/directory'},
];

class NavigatorContainer extends React.Component {
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
        return (
            <Navigator linkButtons={linkButtons} selectedId={selectedId} onSelect={onSelect}/>
        );
    }
}

export default withRouter(NavigatorContainer = connect(
    (state) => ({selectedId: state.NavigatorReducer}),
    {
        onSelect: NavigatorActions.onSelect,
    }
)(NavigatorContainer));
