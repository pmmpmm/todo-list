import React from 'react';

export default function Input({ type, onChange, inpRef }) {
  return <input type={type} onChange={onChange} ref={inpRef} />;
}
