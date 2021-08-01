const axios = require('axios');

exports.handler = async function(event, context) {
	let MainResponse = await axios.get(`https://discord.com/api/v9/users/@me`, {
		headers: {
			Authorization: `Bot ${process.env.token}`,
		},
	});
	let CanaryResponse = await axios.get(`https://discord.com/api/v9/users/@me`, {
		headers: {
			Authorization: `Bot ${process.env.tokenCanary}`,
		},
	});
	return {
		statusCode: 200,
		body: JSON.stringify({
			mainInfo: MainResponse.data,
			canaryInfo: CanaryResponse.data,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	};
};
