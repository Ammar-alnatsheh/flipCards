import React from 'react';

var Card = (props) => {
    let image = `./pics/pic${ props.card.hidden ? 0 : props.card.value }.png`;
    return (
        <td className="Card" style={{backgroundImage: `url(${image})`}}>
        </td>
    );
};

export default Card;