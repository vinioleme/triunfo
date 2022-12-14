import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    savedCard: [],
  };

  onInputChange = (element) => {
    const { name, type, checked } = element.target;
    const nome = type === 'checkbox' ? checked : element.target.value;
    this.setState({ [name]: nome });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      savedCard,
      cardTrunfo,
    } = this.state;

    this.setState({
      savedCard: [
        ...savedCard,
        {
          cardName,
          cardDescription,
          cardImage,
          cardRare,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardTrunfo,
        },
      ],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  };

  forms = () => {
    const maximo = 90;
    const minimo = 0;
    const maximaSoma = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const name = cardName !== '';
    const img = cardImage !== '';
    const description = cardDescription !== '';
    const carta1 = cardAttr1 <= maximo && cardAttr1 >= minimo;
    const carta2 = cardAttr2 <= maximo && cardAttr2 >= minimo;
    const carta3 = cardAttr3 <= maximo && cardAttr3 >= minimo;
    const soma = (+cardAttr1) + (+cardAttr2) + (+cardAttr3) <= maximaSoma;
    return !(name && img && description && carta1 && carta2 && carta3 && soma);
  };

  hasTrunfo = () => {
    const { savedCard } = this.state;
    return savedCard.filter(({ cardTrunfo }) => cardTrunfo === true).length > 0;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,

    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.forms() }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ this.hasTrunfo() }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}
export default App;
