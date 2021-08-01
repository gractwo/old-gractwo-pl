<template>
	<div v-if="status">
		<div class="card">
			<div class="titleCard">
				<img
					:src="
						`https://cdn.discordapp.com/avatars/${status.mainInfo.id}/${
							status.mainInfo.avatar
						}.png?size=64`
					"
					alt="Gractwo bot current avatar"
				/>
				<h3>
					{{ status.mainInfo.username + '#' + status.mainInfo.discriminator }}
				</h3>
			</div>
		</div>
		<div class="card">
			<div class="titleCard">
				<img
					:src="
						`https://cdn.discordapp.com/avatars/${status.canaryInfo.id}/${
							status.canaryInfo.avatar
						}.png?size=64`
					"
					alt="Gractwo Canary bot current avatar"
				/>
				<h3>
					{{
						status.canaryInfo.username + '#' + status.canaryInfo.discriminator
					}}
				</h3>
			</div>
		</div>
		<div class="card">
			<h3>bot card</h3>
			<p>
				Bot Name:
				{{ status.mainInfo.username + '#' + status.mainInfo.discriminator }}
				<br />
				Bot ID: {{ status.mainInfo.id }} <br />
				Bot Avatar:
				<img
					:src="
						`https://cdn.discordapp.com/avatars/${status.mainInfo.id}/${
							status.mainInfo.avatar
						}.png?size=64`
					"
					alt=""
					v-if="status"
				/>
				<br />
				Bot Info: {{ status.mainInfo }}
			</p>
		</div>
		<div class="card">
			<h3>sub bot card</h3>
			<p>
				Bot Name:
				{{ status.canaryInfo.username + '#' + status.canaryInfo.discriminator }}
				<br />
				Bot ID: {{ status.canaryInfo.id }} <br />
				Bot Avatar:
				<img
					:src="
						`https://cdn.discordapp.com/avatars/${status.canaryInfo.id}/${
							status.canaryInfo.avatar
						}.png?size=64`
					"
					alt=""
					v-if="status"
				/>
				<br />
				Bot Info: {{ status.canaryInfo }}
			</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'BotCard',
	data() {
		return {
			status: null,
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
	.titleCard {
		display: flex;
		flex-direction: row;
		justify-content: baseline;
	}
	&:hover,
	&:focus {
		border: 1px solid transparent;
		box-shadow: 0 0 10px black;
	}
}
</style>
