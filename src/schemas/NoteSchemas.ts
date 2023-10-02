import Joi from 'joi';

const messagesError = {
  title: {
    'string.empty': 'Por favor, insira um título',
    'any.required': 'Por favor, insira um título',
  },
  content: {
    'string.empty': 'Por favor, insira um conteúdo',
    'any.required': 'Por favor, insira um conteúdo',
  },
};

export const noteSchema = Joi.object({
  title: Joi.string().required().messages(messagesError.title),
  content: Joi.string().required().messages(messagesError.content),
});