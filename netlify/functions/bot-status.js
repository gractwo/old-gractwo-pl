const axios = require('axios');

exports.handler = async function(event, context) {
	axios
		.get(`https://discord.com/api/v9/users/@me`, {
			headers: {
				Authorization: `Bot ${process.env.token}`,
			},
		})
		.then((response) => {
			return {
				statusCode: 200,
				body: response.data,
			};
		})
		.catch((error) => {
			return {
				statusCode: 500,
				body: 'discord api shat itself brb',
			};
		});
};
