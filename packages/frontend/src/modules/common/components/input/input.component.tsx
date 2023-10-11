import React from 'react';
import { Error, Input } from './input.styled';

export const InputElement = ({
  error,
  touched,
  name,
  ...rest
}: {
  error: string | undefined;
  touched: boolean | undefined;
  name: string;
}) => (
  <>
    <label htmlFor={name}>{name}</label>
    <Input id={name} name={name} placeholder={name} {...rest} />
    {error && touched ? <Error>{error}</Error> : null}
  </>
);
