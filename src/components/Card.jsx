import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      id,
    } = this.props;
    return (
      <div className="card-container">
        <div className="card-title">
          <h2 data-testid="name-card">{cardName}</h2>
        </div>
        <span className="id">
          id
          { id }
        </span>
        <div className="card-image">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="card-description">
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="card-attributes">
          <p data-testid="attr1-card">
            Attribute:
            {cardAttr1}
          </p>
          <p data-testid="attr2-card">
            Attribute:
            {cardAttr2}
          </p>
          <p data-testid="attr3-card">
            Attribute:
            {cardAttr3}
          </p>
        </div>
        <div className="card-rare">
          <p data-testid="rare-card">{cardRare}</p>
        </div>
        <div className="card-trunfo">
          {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  id: null,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default Card;
