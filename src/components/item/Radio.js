import React, { Fragment } from 'react';

export default function Radio({ formType, itemId, options, title }) {
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
        <Fragment>
          {this.options.map(option => (
            <label key={option.id}>
              <input
                type="radio"
                name={this.itemId}
                value={option.id}
                onChange={handleChange}
                checked={this.value === option.id}
              />
              {option.text}
            </label>
          ))}
        </Fragment>
      )
    }
  }
}