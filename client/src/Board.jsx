import React from 'react';
import Card from './Card.jsx';

const Board = (props) => {
        let row1 = props.cards.slice(0,7);
        let row2 = props.cards.slice(7,14);
        let row3 = props.cards.slice(14,20);
        return (
            <table className="Board">
                <tbody>
                    <tr>
                    {row1.map( (card,idx) => {
                        return <Card key={idx} card={card} flipCard={props.flipCard}/>
                    })}
                    </tr>
                    <tr>
                    {row2.map( (card,idx) => {
                        return <Card key={idx} card={card} flipCard={props.flipCard}/>
                    })}
                    </tr>
                    <tr>
                    {row3.map( (card,idx) => {
                        return <Card key={idx} card={card} flipCard={props.flipCard}/>
                    })}
                    </tr>
                </tbody>
            </table>
        );
    }

export default Board;