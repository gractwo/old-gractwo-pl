<template>
	<div v-if="status">
		<Card
			tabindex="0"
			:name="
				`${status.mainInfo.username + '#' + status.mainInfo.discriminator}`
			"
			:photoDyn="
				`https://cdn.discordapp.com/avatars/${status.mainInfo.id}/${
					status.mainInfo.avatar
				}.png?size=128`
			"
			description="Bot obsługujący serwer discord Gractwa."
			onlineIndicator="1"
		/>
		<Card
			tabindex="0"
			:name="
				`${status.canaryInfo.username + '#' + status.canaryInfo.discriminator}`
			"
			:photoDyn="
				`https://cdn.discordapp.com/avatars/${status.canaryInfo.id}/${
					status.canaryInfo.avatar
				}.png?size=128`
			"
			description="Bot zastępczy do testowania nowych funkcji."
			onlineIndicator="0"
		/>
	</div>
</template>

<script>
import axios from 'axios';
import Card from '~/components/Card.vue';

export default {
	name: 'BotCard',
	components: {
		Card,
	},
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

//
<style lang="scss" scoped>
// .card {
// 	display: inline-block;
// 	border: 1px solid var(--gray);
// 	border-radius: 4px;
// 	padding: 1rem;
// 	margin: 1rem 0.2rem;
// 	width: 100%;
// 	transition-duration: var(--trandur);
// 	.cardInner {
// 		display: flex;
// 		flex-direction: row;
// 		.cardTitle {
// 			display: flex;
// 			align-items: baseline;
// 			.botOnlineStatus {
// 				width: 0.5rem;
// 				height: 0.5rem;
// 				background-color: var(--gray);
// 				margin-left: 0.5rem;
// 				border-radius: 50%;
// 				margin-bottom: 0.2rem;
// 			}
// 		}
// 	}
// 	&:hover,
// 	&:focus {
// 		border: 1px solid transparent;
// 		box-shadow: 0 0 10px black;
// 	}
// }
//
</style>
