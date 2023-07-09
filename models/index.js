const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const foodSchema = require('./Food')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Food = mongoose.model('Food', foodSchema)

module.exports = {
  User,
  Post,
  Food
}
