import React from 'react';

class Directory extends React.Component{
    render() {
        //console.log(this.props.games[0]);
        const{
            games
        } = this.props;
        const list = games.map((game)=><li>{game}</li>);
        return(
            <ul>
                {list}
            </ul>

        );
    }
}

export default Directory;
