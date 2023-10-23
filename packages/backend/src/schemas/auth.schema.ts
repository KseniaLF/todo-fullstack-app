import Joi from 'joi';

export const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const changePasswordSchema = Joi.object({
  password: Joi.string().required()
});

export const emailSchema = Joi.object({
  email: Joi.string().email().required()
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  verificationToken: Joi.string().required()
});
