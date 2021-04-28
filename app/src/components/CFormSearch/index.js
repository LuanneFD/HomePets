import React from 'react';

import { MdSearch } from 'react-icons/md';

import { Form, Input } from './styles';

export default function CFormSearch({ placeholder, cstyle, change, value }) {
  return (
    <Form className={cstyle}>
      <Input
        className={cstyle}
        value={value}
        onChange={e => change(e.target.value)}
        placeholder={placeholder} />
      <MdSearch />
    </Form>
  );
}
