import React from 'react';

import { WrapCustomSelect, LabelCustomSelect, CustomSelect } from './styles';

export default function CSelect({ label, val, change, required, items, indexLabel, indexValue, cDisabled }) {
  return (
    <WrapCustomSelect>
      <LabelCustomSelect>{label}</LabelCustomSelect>
      <CustomSelect required={required} disabled={cDisabled} value={val} onChange={e => change(e.target.value)}>
        <option value=''>----------------</option>
        <option disabled></option>
        {items.map(op => (
          <option value={op[indexValue]}>{op[indexLabel]}</option>
        ))}
      </CustomSelect>
    </WrapCustomSelect>
  );
}
