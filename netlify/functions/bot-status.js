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
				body: JSON.stringify(response.data),
			};
		})
		.catch((error) => {
			return {
				statusCode: 500,
				body: JSON.stringify({ errorMsg: 'discord api shat itself brb' }),
			};
		});
};
