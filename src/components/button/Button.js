import React from 'react';
import './Button.css';

export default function Button({ onClick, disabled, text }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}