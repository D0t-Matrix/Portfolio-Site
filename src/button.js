import React from 'react';
import styles from './button.modules.css';

export default function Button({ setCounter, counter}) {
  return (
    <button onClick = { () => { setCounter(counter - 1)}} />
  );
}
