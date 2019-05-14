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
        this.setState({
            value : this.state.value,
            hidden : !this.state.hidden,
        });
    }

    render() {
        let image = `./pics/pic${ this.state.hidden ? 0 : this.state.value }.png`;
        return (
            <td className="Card" style={{backgroundImage: `url(${image})`}} onClick={this.onClick.bind(this)}>
            </td>
        );
    }
}

export default Card;