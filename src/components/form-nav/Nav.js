import React, { Fragment } from 'react';

export default function Nav({ step, setStep, lastStep, handleSubmit }) {
  return (
    <Fragment>
      <button onClick={() => step > 0 && setStep(step - 1)}>이전</button>
      <button onClick={() => step < lastStep && setStep(step + 1)}>다음</button>
      <button onClick={handleSubmit}>제출</button>
    </Fragment>
  )
}