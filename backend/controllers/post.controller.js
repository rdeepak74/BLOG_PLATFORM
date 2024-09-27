import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/apiResponse.js'
import { ApiError } from '../utils/apiError.js'
import Post from '../models/Post.model.js'
import User from '../models/User.model.js'
import { postSchema } from '../validations/post_validation.js'

export const createPost = asyncHandler(async (req, res, next) => {
  const { error } = postSchema.validate(req.body)

  if (error) {
    return next(new ApiError(400, error.details[0].message))
  }

  const { title, content, author } = req.body

  const user = await User.findById(author)

  if (!user) {
    return next(new ApiError(404, 'User not found'))
  }

  const post = await Post.create({
    title,
    content,
    author,
  })

  res.status(201).json(
    new ApiResponse(201, 'Post created successfully', {
      post,
    })
  )
})
