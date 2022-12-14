import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {

      cardName,
      cardDescription,
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (

      <div>

        <label htmlFor="cardName">
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            name="cardName"
            placeholder="Card Name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          <input
            data-testid="description-input"
            type="textarea"
            id="cardDescription"
            name="cardDescription"
            placeholder="Card Description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card1">
          <input
            data-testid="attr1-input"
            type="Number"
            id="card1"
            name="cardAttr1"
            placeholder="Card 1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card2">
          <input
            data-testid="attr2-input"
            type="Number"
            id="card2"
            name="cardAttr2"
            placeholder="Card 2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card3">
          <input
            data-testid="attr3-input"
            type="Number"
            id="card3"
            name="cardAttr3"
            placeholder="Card 3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          <input
            data-testid="image-input"
            type="text"
            id="cardImage"
            name="cardImage"
            placeholder="Card img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor=" cardRare ">
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          { !hasTrunfo ? (<input
            data-testid="trunfo-input"
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />) : <p>Você já tem um Super Trunfo em seu baralho</p> }
        </label>

        <lable>
          <button
            data-testid="save-button"
            type="button"
            name="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </lable>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
};

export default Form;
