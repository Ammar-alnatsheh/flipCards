import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value : 0,
            hidden : true,
        }
    }

    componentDidMount() {
        this.setState({
            value : this.props.card.value,
            hidden : this.props.card.hidden,
        });
    }

    onClick () {
        if ( this.props.card.hidden ) {
            this.props.flipCard(this.props.card);
        }
    }

    render() {
        let image = './pics/pic';
        if ( this.props.card.hidden ) {
            image += '0.png';
        } else {
            image += this.props.card.value + '.png';
        }
        return (
            <td className="Card" style={{backgroundImage: `url(${image})`}} onClick={this.onClick.bind(this)}>
            </td>
        );
    }
}

export default Card;