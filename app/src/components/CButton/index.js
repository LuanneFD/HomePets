import React from 'react';

import { Button } from './styles';

export default function CButton({ ctype, cstyle, click, title, disabled }) {
  return (
    <Button type={ctype} disabled={disabled} onClick={click} className={cstyle}>
      {title}
    </Button>
  );
}
