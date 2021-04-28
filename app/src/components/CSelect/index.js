import React from 'react';

import { WrapCustomSelect, LabelCustomSelect, CustomSelect } from './styles';

export default function CInput({ label, val, change, required, items, indexLabel, indexValue }) {
  return (
    <WrapCustomSelect>
      <LabelCustomSelect>{label}</LabelCustomSelect>
      <CustomSelect required={required} value={val} onChange={e => change(e.target.value)}>
        <option value=''>----------------</option>
        <option disabled></option>
        {items.map(op => (
          <option value={op[indexValue]}>{op[indexLabel]}</option>
        ))}
      </CustomSelect>
    </WrapCustomSelect>
  );
}
