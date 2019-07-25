import React from 'react';
import styles from './FormNav.module.css';
import Button from '../button/Button';

export default function Nav({ step, setStep, lastStep, checkValidation, handleSubmit }) {
  return (
    <div className={styles.nav}>
      <Button
        onClick={() => setStep(step => step - 1)}
        disabled={step < 1}
        text="이전"
      />

      {step !== lastStep &&
        <Button
          onClick={() => checkValidation() && setStep(step => step + 1)}
          disabled={step > lastStep - 1}
          text="다음"
        />
      }
      {step === lastStep &&
        <Button
          onClick={() => checkValidation() && handleSubmit()}
          disabled={step !== lastStep}
          text="제출"
        />
      }
    </div>
  )
}

