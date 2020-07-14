const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoemsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	title: {
		type: String,
		require: true
	},
	poem: [
		{
			lineOne: {
				type: String,
				require: true
			},
			lineTwo: {
				type: String,
				require: true
			},
			lineThree: {
				type: String,
				require: true
			}
		}
	],
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	]
});

module.exports = mongoose.model('poems', PoemsSchema);
