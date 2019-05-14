import React from 'react';
import Card from './Card.jsx';

class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let row1 = this.props.cards.slice(0,5);
        let row2 = this.props.cards.slice(5,10);
        let row3 = this.props.cards.slice(10,15);
        let row4 = this.props.cards.slice(15,20);
        return (
            <table className="Board">
                <tbody>
                    <tr>
                    {row1.map( (card,idx) => {
                        return <Card key={idx} card={card}/>
                    })}
                    </tr>
                    <tr>
                    {row2.map( (card,idx) => {
                        return <Card key={idx} card={card}/>
                    })}
                    </tr>
                    <tr>
                    {row3.map( (card,idx) => {
                        return <Card key={idx} card={card}/>
                    })}
                    </tr>
                    <tr>
                    {row4.map( (card,idx) => {
                        return <Card key={idx} card={card}/>
                    })}
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Board;