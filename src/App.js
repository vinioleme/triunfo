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
    hasTrunfo: false,
    cardTrunfo: false,
    savedCard: [],
  };

  onInputChange = (element) => {
    const { name, type, checked } = element.target;
    const x = type === 'checkbox' ? checked : element.target.value;
    this.setState({ [name]: x });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCard,
    } = this.state;

    this.setState({
      savedCard: [
        ...savedCard,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
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
    const max = 90;
    const min = 0;
    const maxsum = 210;
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
    const one = cardAttr1 <= max && cardAttr1 >= min;
    const two = cardAttr2 <= max && cardAttr2 >= min;
    const three = cardAttr3 <= max && cardAttr3 >= min;
    const sum = (+cardAttr1) + (+cardAttr2) + (+cardAttr3) <= maxsum;
    return !(name && img && description && one && two && three && sum);
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
          hasTrunfo={ this.hasTrunfo }
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
