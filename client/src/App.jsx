import React from 'react';
import Cards from './Cards.jsx';
import Board from './Board.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: 'X',
            cards: [],
            flippedCard: 0,
            timer: 0,
        }
    }

    componentDidMount () {
        let name = prompt('Enter your name');
        let time = new Date();
        let deck = new Cards();
        let cards = deck.getCards();
        cards.forEach( card => {
            card.hidden = true;
        });

        this.setState({
            playerName: name,
            cards: cards,
            flippedCard: 0,
            timer: time, 
        });
    }

    render() {
        return (
        <div className='App'>
            <div className="Headder">
                <div className="playerName">
                    {`Player Name : ${this.state.playerName}`}
                </div>
                <div className="timer">
                    {`Game start at : ${this.state.timer.toLocaleString()}`}
                </div>
            </div>
            <Board cards={this.state.cards} />
        </div>);
    }
}

export default App;