import React from 'react';
import { Body } from '../../style/typograthy';
import { InputContainer } from './style';

const Input = ({ label, type, placeholder, register, error }) => {
  return (
    <InputContainer>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error ? <Body color="--grey-1">{error}</Body> : null}
    </InputContainer>
  );
};

export default Input;
