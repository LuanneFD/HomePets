import React from 'react';

import { Wrap } from './styles';

export default function CCheckbox({ click, active }) {
  return (
    <Wrap>
      <div onClick={click} className={`box ${active}`}></div>
    </Wrap>
  );
}
