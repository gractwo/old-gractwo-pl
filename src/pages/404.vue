<template>
	<Layout>
		<div class="altnotfound">
			<g-link to="/" style="background-color:inherit;">
				<g-image
					src="~/assets/main-logo-x64.png"
					width="64"
					style="margin: 0"
				/>
			</g-link>
			<h1>error</h1>
			<h1>404</h1>
		</div>
		<div class="morenotfound">
			<p>Ta ścieżka nie ma końca.</p>
			<g-link to="/">Wróć na główną.</g-link>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Błąd 404',
	},
};
</script>

<style lang="scss" scoped>
.morenotfound {
	margin-top: 2rem;
	text-align: center;
}
.altnotfound {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	user-select: none;
	h1:first-of-type {
		font-size: 12rem;
	}
	h1:last-of-type {
		// background-color: var(--black);
		border-radius: 0.5rem;
		line-height: 8rem;
		font-size: 10rem;
		letter-spacing: -12px;
		margin-top: -6rem;
		text-shadow: -8px -8px 0 var(--black), 8px -8px 0 var(--black),
			0 -8px 0 var(--black), 0 16px 0 var(--black);
	}
}
@media only screen and (max-width: 1000px) {
	.altnotfound {
		transform: scale(0.6);
	}
	.morenotfound {
		margin-top: 0;
	}
}
</style>

© 2021 GitHub, Inc. Terms Privacy Security Status Docs Contact GitHub Pricing
API Training Blog About Loading complete
