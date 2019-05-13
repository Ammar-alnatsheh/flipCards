import React from 'react';

class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let row1 = this.props.cards.slice(0,4);
        let row2 = this.props.cards.slice(4,8);
        let row3 = this.props.cards.slice(8,12);
        let row4 = this.props.cards.slice(12,16);
        return (
        <div className="Board">
            <div className='row1'>
                {row1.map( (card,idx) => {
                    return (<label key={idx}>{card.value}</label>);
                })}
            </div>
            <div className='row2'>
                {row2.map( (card,idx) => {
                    return (<label key={idx * 2}>{card.value}</label>);
                })}
            </div>
            <div className='row3'>
                {row3.map( (card,idx) => {
                    return (<label key={idx * 3}>{card.value}</label>);
                })}
            </div>
            <div className='row4'>
                {row4.map( (card,idx) => {
                    return (<label key={idx * 4}>{card.value}</label>);
                })}
            </div>
        </div>);
    }
}

export default Board;