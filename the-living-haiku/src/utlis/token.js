import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
export const token = () => {
	const jwtSecret = 'mySecretToken';

	jwt.sign(uuidv4(), jwtSecret, { expiresIn: 360000 }, (err, token) => {
		if (err) throw err;
		return token;
	});
};
