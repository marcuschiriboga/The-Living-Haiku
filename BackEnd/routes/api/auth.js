const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const User = require('../api/models/Users');

//@route    GET api/auth
//@desc     TEST middleware
//@results  if there is a token it will say sign in, else it will say No token, authorization denied
//@access   Public
//router.get('/', auth, (req, res) => res.send('Sign In'));

//@route    GET api/Auth
//@desc     returns all information
//@access   Public
router.get('/', auth, async (req, res) => {
	try {
		//Make a call to database and find a user by the id
		const user = await User.findById(req.user.id).select('-password');
		res.send(user);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route   POST api/auth
//@desc    Authenticate User & get token
//@access  Public
router.post(
	'/',
	[
		check('email').trim().isEmail().normalizeEmail().withMessage('Invalid Credentials'),
		check('password').trim().exists().withMessage('Invalid Credentials')
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
