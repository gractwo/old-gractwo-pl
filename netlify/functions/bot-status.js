const axios = require('axios');

exports.handler = async function(event, context) {
	let response = await axios.get(`https://discord.com/api/v9/users/@me`, {
		headers: {
			Authorization: `Bot ${process.env.token}`,
		},
	});
	let statusResponse = await axios.get(
		`https://discord.com/api/v9/users/@me/connections`,
		{
			headers: {
				Authorization: `Bot ${process.env.token}`,
			},
		}
	);
	console.log(statusResponse.data);
	return {
		statusCode: 200,
		body: JSON.stringify({
			info: response.data,
			status: statusResponse.data,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	};
};
