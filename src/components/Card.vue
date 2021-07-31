<template>
	<p>This is a card.</p>
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
