const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	about: {
		type: String,
		require: false
	},
	avatar: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('profile', ProfileSchema);
