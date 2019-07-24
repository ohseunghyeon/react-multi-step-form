import React from 'react';
import styles from './Item.module.css';
import { Checkbox, Radio, Text, Selectbox } from './ItemInput';

export default function Item({ item, value, handleChange }) {
  return (
    <div className={styles.article}>
      <h2 className="title">{item.title}</h2>
      <Input
        value={value}
        item={item}
        onChange={handleChange}
      />
    </div>
  )
}

function Input({ item, value, onChange }) {
  switch (item.formType) {
    case 1: return Checkbox({ item, value, onChange });
    case 2: return Radio({ item, value, onChange });
    case 3: return Text({ item, value, onChange });
    case 4: return Selectbox({ item, value, onChange });
    default:
  }
}
