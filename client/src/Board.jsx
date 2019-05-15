import React from 'react';
import Card from './Card.jsx';

const Board = (props) => {
        let row1 = props.cards.slice(0,5);
        let row2 = props.cards.slice(5,10);
        let row3 = props.cards.slice(10,15);
        let row4 = props.cards.slice(15,20);
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
                    <tr>
                    {row4.map( (card,idx) => {
                        return <Card key={idx} card={card} flipCard={props.flipCard}/>
                    })}
                    </tr>
                </tbody>
            </table>
        );
    }

export default Board;