<template>
	<div class="cards" v-if="status">
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

<style lang="scss" scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>
