import axios from 'axios';

export const SEND_EMAIL = 'send_email';

const EMAIL_PATH = 'https://5e80fmj1hh.execute-api.us-west-2.amazonaws.com/dev';

export function send_email(values){
	const request = axios.post(EMAIL_PATH, values);

	return {
		type: SEND_EMAIL,
		payload: request
	};
}