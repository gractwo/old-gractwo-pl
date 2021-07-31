<template>
	<!-- <g-image alt="" :src="require(`../assets/spis/${photo}`)" /> -->
	<div class="card">
		<h3>{{ name }}</h3>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		name: String,
		photo: String,
		desc: String,
		link: String,
		discord: String,
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
	width: 8rem;
	transition-duration: var(--trandur);
	&:hover,
	&:focus {
		border: 1px solid transparent;
		box-shadow: 0 0 10px black;
	}
}
</style>
