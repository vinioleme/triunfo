import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text-area"
            data-testid="description-input"
            name="description"
          />
        </label>
        <label htmlFor="Attr1">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            name="Attr1"
          />
        </label>
        <label htmlFor="Attr2">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            name="Attr2"
          />
        </label>
        <label htmlFor="Attr3">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            name="Attr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
          />
        </label>
        <label htmlFor="type">
          Tipo:
          <select
            data-testid="rare-input"
            name="type"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="checkbox"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          // disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
