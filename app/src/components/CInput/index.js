import React from 'react';
import InputMask from 'react-input-mask';

import { WrapCustomInput, LabelCustomInput } from './styles';

export default function CInput({ type, label, val, change, required, mask = false }) {
  return (
    <WrapCustomInput>
      <LabelCustomInput>{label}</LabelCustomInput>
      {!mask ? (
        <input type={type} required={required} value={val} onChange={e => change(e.target.value)} />
      ) : (
          <InputMask type={type} required={required} value={val} onChange={e => change(e.target.value)} mask={mask} />
        )}
    </WrapCustomInput>
  );
}
