const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const config = require('config');

const auth = require('../../middleware/auth');

const User = require('../api/models/Users');
const Profile = require('../api/models/Profile');

//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate('user', 'name');
		if (!profile) {
			return res.status(400).json({ msg: 'no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

//@route    POST api/profile
//@desc     Create and update about and avatar
//@access   Private
router.post('/', auth, async (req, res) => {
	const { about, avatar } = req.body;

	userFields = {};
	userFields.user = req.user.id;

	if (about) userFields.about = about;
	if (avatar) userFields.avatar = avatar;

	try {
		let profile = await Profile.findOne({ user: req.user.id });
		if (profile) {
			profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: userFields }, { new: true });
			return res.json(profile);
		}
		profile = new Profile(userFields);
		await profile.save();
		res.json(profile);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

//@route    GET api/profile
//@desc     GET all profiles
//@access   Public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', [ 'name', 'avatar' ]);
		res.json(profiles);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

//@route   GET api/profile/user/:user_id
//@desc    Get all profile by user id
//@access  Public
router.get('/user/:user_id', async ({ params: { user: user_id } }, res) => {
	try {
		const profile = await Profile.findOne({ user_id }).populate('user', [ 'name' ]);

		if (!profile) return res.status(400).json({ msg: 'Profile not found' });

		res.json(profile);
	} catch (error) {
		console.error(error.message);
		if (error.kind === 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

//@route   Delete api/profile
//@desc    Delete profile & user
//@access  Private
router.delete('/', auth, async (req, res) => {
	try {
		//todo remove users post
		//remove user
		await User.findOneAndRemove({ _id: req.user.id });
		//remove profile
		await Profile.findOneAndRemove({ user: req.user.id });

		res.json({ msg: 'User Deleted' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Sever Error');
	}
});

module.exports = router;
