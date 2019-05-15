import React from 'react';
import Cards from './Cards.jsx';
import Board from './Board.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            cards: [],
            flippedCard: null,
            timer: 0,
            allCards: 0
        }
    }

    componentDidMount () {
        let name = prompt('Enter your name');
        let time = 0;
        let deck = new Cards();
        let cards = deck.getCards();
        cards.forEach( card => {
            card.hidden = true;
        });

        setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            });
        }, 1000);

        this.setState({
            playerName: name,
            cards: cards,
            flippedCard: null,
            timer: time, 
            allCards: 0
        });
    }

    flipCard (card) {
        card.hidden = false;
        if ( this.state.flippedCard === null ) {
            this.setState({
                flippedCard: card,
            });
        } else {
            setTimeout( () => {
                this.setState(this.state);
                let preCard = this.state.flippedCard;
                let allCards = this.state.allCards;
    
                if ( preCard.value === card.value ) {
                    preCard.hidden = false;
                    card.hidden = false;
                    allCards += 2;
    
                    if (allCards === this.state.cards.length) {
                        alert("Congragulation, Game finished at " + this.state.timer);
                    }
    
                } else {
                    preCard.hidden = true;
                    card.hidden = true; 
                }
                this.setState({
                    flippedCard: null,
                    allCards: allCards
                });
            },1500);
        }
    }

    render() {
        return (
        <div className='App'>
            <div className="Headder">
                <div className="playerName">
                    {`Player Name : ${this.state.playerName}`}
                </div>
                <div className="timer">
                    {`Time  ${Math.floor(this.state.timer / 60)}:${this.state.timer % 60}`}
                </div>
            </div>
            <Board cards={this.state.cards} flipCard={this.flipCard.bind(this)}/>
        </div>);
    }
}

export default App;