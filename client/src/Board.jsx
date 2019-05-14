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
            <table className="Board">
                <tbody>
                    <tr>
                    {row1.map( (card,idx) => {
                        return <td key={idx}>{card.value}</td>
                    })}
                    </tr>
                    <tr>
                    {row2.map( (card,idx) => {
                        return <td key={idx}>{card.value}</td>
                    })}
                    </tr>
                    <tr>
                    {row3.map( (card,idx) => {
                        return <td key={idx}>{card.value}</td>
                    })}
                    </tr>
                    <tr>
                    {row4.map( (card,idx) => {
                        return <td key={idx}>{card.value}</td>
                    })}
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Board;