import { FormikErrors, FormikTouched } from 'formik';

export interface IUser {
  email: string;
  password: string;
}

export type Fields = 'email' | 'password' | 'confirm-pass';
export type TInitialValues = { [key in Fields]?: string };

export interface IFormData {
  action: string;
  callback: (data: TInitialValues) => void;
  fields?: Fields[];
}

export type TInputField = {
  field: Fields;
  values: TInitialValues;
  errors: FormikErrors<TInitialValues>;
  touched: FormikTouched<TInitialValues>;
};

export interface IResetPass {
  password: string;
  verificationToken: string;
}
