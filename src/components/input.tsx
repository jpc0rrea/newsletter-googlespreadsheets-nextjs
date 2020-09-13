import React from 'react';

import { InputField } from '../styles/components/InputField';

const Input = ({ id, placeholder, ...rest }) => {
  const type = rest.type ? rest.type : 'text';
  return (
    <InputField>
      <div className="input-block">
        <input type={type} id={id} placeholder={placeholder} {...rest} />
      </div>
    </InputField>
  );
};

export default Input;
