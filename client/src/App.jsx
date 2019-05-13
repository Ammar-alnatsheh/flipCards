import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: 'X',
            board: [],
            flippedCard: 0,
            timer: 0,
        }
    }

    componentDidMount () {
        let name = prompt('Enter your name');
        let time = new Date();

        this.setState({
            playerName: name,
            board: [],
            flippedCard: 0,
            timer: time, 
        });
    }

    render() {
        return (
        <div className='App'>
            <div className="headder">
                <div className="playerName">
                    {`Player Name : ${this.state.playerName}`}
                </div>
                <div className="timer">
                    {`Game start at : ${this.state.timer.toLocaleString()}`}
                </div>
            </div>
        </div>);
    }
}

export default App;