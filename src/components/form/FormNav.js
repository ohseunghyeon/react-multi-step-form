import React from 'react';
import './FormNav.css';

export default function Nav({ step, setStep, lastStep, checkValidation, handleSubmit }) {
  return (
    <div className="nav">
      <button
        className="btn"
        onClick={() => setStep(step => step - 1)}
        disabled={step < 1}
      >
        이전
      </button>
      {step !== lastStep &&
        <button
          className="btn"
          onClick={() => checkValidation() && setStep(step => step + 1)}
          disabled={step > lastStep - 1}
        >
          다음
      </button>
      }
      {step === lastStep &&
        <button
          className="btn"
          onClick={() => checkValidation() && handleSubmit()}
          disabled={step !== lastStep}
        >
          제출
      </button>
      }
    </div>
  )
}