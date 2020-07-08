const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../api/models/Users');

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post(
	'/',
	[
		check('name').not().isEmpty().trim().withMessage('Name is required'),
		check('email').trim().isEmail().normalizeEmail().withMessage('Must be a valid email'),
		check('password').trim().isLength({ min: 6 }).withMessage('Must be longer than 6 characters')
	],
	async (req, res) => {
		//Any error from signing up this will store them in an array
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const user = ({ name, email, password } = req.body);

		try {
			//Check to see if there is already a user with the email
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({
					errors: [ { message: 'User Already Exist' } ]
				});
			}

			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

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

		console.log(user);
		res.send(user);
	}
);

module.exports = router;
