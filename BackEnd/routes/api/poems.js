const express = require('express');
const router = express.Router();

const { check, validationResults } = require('express-validator');

const auth = require('../../middleware/auth');

const User = require('./models/Users');
const Profile = require('./models/Profile');
const Poems = require('./models/Poems');

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
	try {
		const poem = await Poems.findById(req.params.id);

		if (poem.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
			return res.status(400).json({ msg: 'Poem already liked' });
		}
		poem.likes.unshift({ user: req.user.id });
		await poem.save();
		return res.json(post.likes);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
	try {
		const poem = await Poems.findById(req.params.id);

		// Check if the post has not yet been liked
		if (poem.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
			return res.status(400).json({ msg: 'Post has not yet been liked' });
		}

		const removeIndex = poem.likes.map(like => like.user.toString()).indexOf(req.user.id);

		poem.likes.splice(removeIndex, 1);

		await poem.save();

		return res.json(poem.likes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
