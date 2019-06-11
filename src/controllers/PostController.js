const Post = require('../models/Post')

module.exports = {
  async index(req, res) {},
  async store(req, res) {
    const { author, place, description, tags } = req.body
    const { filename: image } = req.file

    const post = await Post.create({
      author,
      place,
      description,
      tags,
      image
    })

    return res.json(post)
  }
}
