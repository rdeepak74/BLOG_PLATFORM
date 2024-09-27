import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/apiResponse.js'
import { ApiError } from '../utils/apiError.js'
import User from '../models/User.model.js'
import { userSchema, userLoginSchema } from '../validations/user_validation.js'
import bcryptjs from 'bcryptjs'
import {
  genarateAccessToken,
  genarateRefreshToken,
} from '../middleware/generateToken.js'

export const register = asyncHandler(async (req, res, next) => {
  const { error } = userSchema.validate(req.body)
  // console.log(error.details)
  if (error) {
    return next(new ApiError(400, error.details[0].message))
  }
  const { username, email, password } = req.body

  const exists = await User.findOne({ email })
  if (exists) {
    return next(new ApiError(400, 'Email already exists'))
  }

  const user = await User.create({
    username,
    email,
    password,
  })

  const createdUser = await User.findById(user._id).select('-password')

  if (!createdUser) {
    return next(
      new ApiError(400, 'Something went wrong while registering the user')
    )
  }

  res
    .status(201)
    .json(new ApiResponse(201, 'User created successfully', createdUser))
})

export const login = asyncHandler(async (req, res, next) => {
  const { error } = userLoginSchema.validate(req.body)

  if (error) {
    return next(new ApiError(400, error.details[0].message))
  }

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return next(new ApiError(400, 'Invalid credentials'))
  }

  const isMatch = await bcryptjs.compare(password, user.password)

  if (!isMatch) {
    return new ApiError(400, 'Invalid credentials')
  }
  const { password: p, ...restUser } = user._doc

  const accessToken = genarateAccessToken(restUser)
  const refreshToken = genarateRefreshToken(restUser)

  res
    .status(200)
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 2 * 24 * 60 * 60 * 1000,
    })
    .json(
      new ApiResponse(200, 'User logged in successfully', {
        user: restUser,
        accessToken,
      })
    )
})
