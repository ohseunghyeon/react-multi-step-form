import React from 'react';

export default function Text({ formType, itemId, options, title }) {
  return {
    formType,
    itemId,
    options,
    title,
    value: '',

    copyWithValues({ value: text }) {
      return {
        ...this,
        value: text
      };
    },

    validate() {
      return !!this.value;
    },

    getSubmitData() {
      return {
        id: itemId,
        answer: this.value
      }
    },

    render(handleChange) {
      return (
        <textarea
          style={{
            width: '100%',
            height: '50px'
          }}
          type="text"
          name={this.itemId}
          onChange={handleChange}
          value={this.value}
        />
      )
    }
  }
}