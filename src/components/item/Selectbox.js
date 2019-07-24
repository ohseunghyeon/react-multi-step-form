import React from 'react';

export default function Selectbox({ formType, itemId, options, title }) {
  return {
    formType,
    itemId,
    options,
    title,
    value: options[0].id,

    copyWithValues({ value: optionId }) {
      return {
        ...this,
        value: Number(optionId)
      };
    },

    validate() {
      return !!this.value;
    },

    getSubmitData() {
      return {
        id: itemId,
        answer: options.filter(o => o.id === this.value)[0].text
      }
    },

    render(handleChange) {
      return (
        <select
          name={this.itemId}
          onChange={handleChange}
          value={this.value}
        >
          {this.options.map(option => (
            <option key={option.id} value={option.id}>
              {option.text}
            </option>
          ))}
        </select>
      )
    }
  }
}