import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unquie: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcryptjs.hash(this.password, 10)

  next()
})

const User = mongoose.model('User', userSchema)

export default User
