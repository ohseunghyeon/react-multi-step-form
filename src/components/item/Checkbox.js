import React, { Fragment } from 'react';

export default function Checkbox({ formType, itemId, options, title }) {
  return {
    formType,
    itemId,
    options,
    title,
    value: [],

    copyWithValues({ value: optionId, checked }) {
      const newValue = [...this.value];
      newValue[Number(optionId)] = checked;

      return {
        ...this,
        value: newValue
      };
    },

    validate() {
      return this.value.includes(true);
    },

    getSubmitData() {
      return {
        id: itemId,
        answer: this.value
          .reduce((arr, cur, index) => {
            if (cur) arr.push(options.filter(o => o.id === index)[0].text);

            return arr;
          }, [])
          .join()
      }
    },

    render(handleChange) {
      return (
        <Fragment>
          {this.options.map(option => (
            <label key={option.id}>
              <input
                type="checkbox"
                name={this.itemId}
                value={option.id}
                checked={!!this.value[option.id]}
                onChange={handleChange}
              />
              {option.text}
            </label>
          ))}
        </Fragment>
      )
    }
  }
}