import React, { Fragment, useState } from 'react';

import styles from './Form.module.css';
import { useFormData } from '../../hooks';
import Item from '../form-item/Item';
import Nav from '../form-nav/Nav';

export default function Form() {
  const [values, setValues] = useState([]);
  const [formData] = useFormData(setValues);
  const [step, setStep] = useState(0);

  if (!formData.items) {
    return false;
  }

  const item = formData.items[step];

  const handleChange = (e) => {
    const newValues = [...values];

    const selectedValue = item.formType === 3 // text
      ? e.target.value
      : Number(e.target.value);

    if (item.formType === 1) { // checkbox
      newValues[step] = [...values[step]];
      newValues[step][selectedValue] = e.target.checked;
    } else {
      newValues[step] = selectedValue;
    }

    setValues(newValues);
  };

  const handleSubmit = () => {
    const body = {
      id: formData.formId,
      items: formData.items
        .map(({ itemId: id, formType, options }, index) => {
          let answer;

          switch (formType) {
            case 1: // checkbox
              answer = values[index].reduce((arr, cur, index) => {
                if (cur) {
                  const a = options.filter(o => o.id === index)[0];
                  a && arr.push(a.text);
                }
                return arr;
              }, [])
                .join();
              break;

            case 2: // radio
            case 4: // selectbox
              const a = options.filter(o => o.id === values[index])[0];
              answer = a && a.text;
              break;

            default: // text
              answer = values[index];
              break;
          }

          return { id, answer };
        }),
    };

    // TODO: change this to send body to server
    console.log(JSON.stringify(body, null, 2));
  };

  return (
    <Fragment>
      <header>
        <h1 className={styles.h1}>
          {formData.title}
        </h1>
      </header>

      <main className={styles.section}>
        <Item
          value={values[step]}
          item={item}
          handleChange={handleChange}
        />
        <Nav
          step={step}
          setStep={setStep}
          lastStep={formData.items.length - 1}
          handleSubmit={handleSubmit}
        />
      </main>
    </Fragment>
  );
}
