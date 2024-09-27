import Joi from 'joi'

const postSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  content: Joi.string().min(3).required(),
  author: Joi.string().required(),
})

export { postSchema }
