import React, { Fragment } from 'react';

export function Checkbox({ item, value, onChange }) {
  return (
    <Fragment>
      {item.options.map(option => (
        <label key={option.id}>
          <input
            type="checkbox"
            name={item.itemId}
            value={option.id}
            checked={!!value[option.id]}
            onChange={onChange}
          />
          {option.text}
        </label>
      ))}
    </Fragment>
  );
}

export function Radio({ item, value, onChange }) {
  return (
    <Fragment>
      {item.options.map(option => (
        <label key={option.id}>
          <input
            type="radio"
            name={item.itemId}
            value={option.id}
            onChange={onChange}
            checked={value === option.id}
          />
          {option.text}
        </label>
      ))}
    </Fragment>
  );
}

export function Text({ item, value, onChange }) {
  return (
    <input
      type="text"
      name={item.itemId}
      onChange={onChange}
      value={value}
    />
  );
}

export function Selectbox({ item, value, onChange }) {
  return (
    <select
      name={item.itemId}
      onChange={onChange}
      value={value}
    >
      {item.options.map(option => (
        <option key={option.id} value={option.id}>
          {option.text}
        </option>
      ))}
    </select>
  );
}