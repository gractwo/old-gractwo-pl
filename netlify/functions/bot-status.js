const axios = require('axios');

exports.handler = async function(event, context) {
	let response = await axios.get(`https://discord.com/api/v9/users/@me`, {
		headers: {
			Authorization: `Bot ${process.env.token}`,
		},
	});
	return {
		statusCode: 200,
		body: JSON.stringify(response.data),
	};
};
