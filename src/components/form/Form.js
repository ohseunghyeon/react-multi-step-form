import React, { Fragment, useState } from 'react';

import styles from './Form.module.css';
import { useFormData } from '../../hooks';
import Nav from './FormNav'

export default function Form() {
  const [items, setItems] = useState([]);
  const [formData] = useFormData(setItems);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);

  if (!formData.items) {
    return false;
  }

  const handleChange = (e) => {
    const newItems = [...items];

    newItems[step] = items[step].copyWithValues({
      value: e.target.value, // could be optionId or text
      checked: e.target.checked
    });

    setItems(newItems);
  };

  const checkValidation = () => {
    if (items[step].validate()) {
      setIsError(false);
      return true;
    }

    setIsError(true);
    return false;
  }

  const handleSubmit = () => {
    const body = {
      id: formData.formId,
      items: items.map(item => item.getSubmitData())
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

        <div className={styles.item}>
          <h2 className={styles.item__title}>
            {items[step].title}
          </h2>
          {items[step].render(handleChange)}
        </div>

        {isError && <div className={styles.error}>값을 입력해주세요!</div>}

        <Nav
          step={step}
          setStep={setStep}
          lastStep={formData.items.length - 1}
          checkValidation={checkValidation}
          handleSubmit={handleSubmit}
        />

      </main>
    </Fragment>
  );
}
