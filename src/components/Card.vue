<template>
	<!-- <g-image alt="" :src="require(`../assets/spis/${photo}`)" /> -->
	<div class="card">
		<div class="cardInnerFlex">
			<div class="cardInnerPhoto">
				<!-- <img alt="" :src="require(`~/assets/cards/${photo}`)" /> -->
			</div>
			<div class="cardInnerInfo">
				<div class="cardInnerInfoTitle">
					<h3>{{ name }}</h3>
					<p>{{ nickname }}</p>
				</div>
				<p style="text-align: justify">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		name: String,
		nickname: String,
		photo: String,
		description: String,
	},
};
</script>

<style lang="scss" scoped>
.card {
	display: inline-block;
	border: 1px solid var(--gray);
	border-radius: 4px;
	// padding: 1rem;
	margin: 1rem 0.2rem;
	width: 49%;
	transition-duration: var(--trandur);
	.cardInnerFlex {
		display: flex;
		flex-direction: row;
		.cardInnerPhoto {
			width: 8rem;
			height: 8rem;
			background-color: black;
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}
		.cardInnerInfo {
			padding: 1rem;
			.cardInnerInfoTitle {
				display: flex;
				flex-direction: row;
				align-items: baseline;
				h3 {
					margin-right: 1rem;
				}
				p {
					color: var(--graytext);
				}
			}
		}
	}
	&:hover,
	&:focus {
		border: 1px solid transparent;
		box-shadow: 0 0 10px black;
	}
}
</style>
