import express from 'express'
import { createPost, getAllPosts } from '../controllers/post.controller.js'

const router = express.Router()

router.post('/create-post', createPost)
router.get('/get-all-post', getAllPosts)

export default router
