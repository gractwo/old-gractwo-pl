<template>
	<div class="card">
		<h3>bot card</h3>
		<p>
			Bot Name:
			{{ status.info.username + '#' + status.info.discriminator }} <br />
			Bot ID: {{ status.info.id }} <br />
			Bot Avatar:
			<img
				:src="
					`https://cdn.discordapp.com/avatars/${status.info.id}/${
						status.info.avatar
					}.png?size=64`
				"
				alt=""
				v-if="status"
			/>
			<br />
			Bot Status: {{ status.status }} <br />
			Bot Info: {{ status.info }}
		</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'BotCard',
	data() {
		return {
			status: {},
		};
	},
	async mounted() {
		try {
			this.fetchData();
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		fetchData: function() {
			axios.get(`/.netlify/functions/bot-status`).then((response) => {
				this.status = response.data;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	display: inline-block;
	border: 1px solid var(--gray);
	border-radius: 4px;
	padding: 1rem;
	margin: 1rem 0.2rem;
	width: 100%;
	transition-duration: var(--trandur);
	&:hover,
	&:focus {
		border: 1px solid transparent;
		box-shadow: 0 0 10px black;
	}
}
</style>
