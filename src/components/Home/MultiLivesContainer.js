import React from 'react';
import MultiLives from './MultiLives';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LiveContainer from "../Live/LiveContainer";
import NavigatorActions from "../../actions/NavigatorActions";
import ChannelActions from "../../actions/ChannelActions";
import WatchingActions from "../../actions/WatchingActions";


class MultiLivesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [...Array(props.liveNum).keys()].map(e=>e-Math.floor(props.liveNum/2)),
            randoms: undefined,
        };
        this.onClickLive = this.onClickLive.bind(this);
    }

    onClickLive(order, channel) {
        const shiftRight= (num)=>{
            const temp = [...this.state.orders];
            for(let i=num; i>0; i--){
                const last = temp.pop();
                temp.unshift(last);
            }
            this.setState({orders:temp});
        };
        const shiftLeft= (num)=>{
            const temp = [...this.state.orders];
            for(let i=num; i>0; i--){
                const first = temp.shift();
                temp.push(first);
            }
            this.setState({orders:temp});
        };
        const {
            history,
            onSelect,
            updateWatching,
        } = this.props;
        if (order===0){
            onSelect(-1);
            history.push({pathname: `/live`});
            updateWatching(channel);
        }else if(order > 0) {
            shiftRight(Math.abs(order));
        } else if (order < 0) {
            shiftLeft(Math.abs(order));
        }
    }
    componentDidMount() {
        const {
            channels,
        } = this.props;
        if(channels.size !==0)this.setState({randoms:LiveContainer.getRandom(0, channels.size, 3)});
    }

    render() {
        const {
            channels,
            liveNum,
        } = this.props;
        const recommendChannels = channels.size===0? undefined:[...channels].splice(0,liveNum);
        return (
            <MultiLives
                channels={recommendChannels}
                orders={this.state.orders}
                onClickLive={this.onClickLive}
            />
        );
    }
}


export default withRouter(MultiLivesContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        onSelect: NavigatorActions.onSelect,
        updateWatching: WatchingActions.updateWatching,
    }
)(MultiLivesContainer));