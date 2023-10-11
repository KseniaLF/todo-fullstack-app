import Joi from 'joi';

export const todoSchema = Joi.object({
  description: Joi.string().required().min(5).max(1000),
  title: Joi.string().required().max(50),
  complete: Joi.boolean(),
  private: Joi.boolean()
});
