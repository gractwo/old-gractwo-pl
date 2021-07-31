<template>
	<div>
		<slot />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');
:root {
	--black: hsl(0, 0%, 10%);
	--white: hsl(0, 0%, 90%);
	--gray: hsl(0, 0%, 20%);
	--graytext: hsl(0, 0%, 55%);
	--red: #fb636b;
	--light-red: rgba(251, 99, 107, 0.25);
	--blue: #61f2ea;
	--radius: 6px;
	--trandur: 0.1s;
}
* {
	margin: 0;
	padding: 0;
}
html {
	background-color: var(--black);
	color: var(--white);
	font-family: 'Quicksand', sans-serif;
	font-size: 16px;
	h1,
	h2,
	h3 {
		font-family: 'Lexend', sans-serif;
	}
	a {
		color: var(--red);
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		transition-duration: var(--trandur);
		&:hover,
		&:focus {
			background-color: var(--light-red);
			outline: none;
		}
	}
}
</style>

<style lang="scss">
// TOAST STYLING
.toastcss {
	background-color: var(--gray) !important;
	border-left: 4px solid var(--red);
	transition-duration: var(--trandur);
	border-image-slice: 1;
	border-image-source: linear-gradient(
		180deg,
		rgba(251, 99, 107, 1) 0%,
		rgba(97, 242, 234, 1) 100%
	);
}
</style>

<style lang="scss">
// TOOLTIP STYLING
.tooltip {
	display: block !important;
	z-index: 10000;
	.tooltip-inner {
		background: var(--gray);
		box-shadow: 0 6px 18px black;
		border-radius: 4px;
		padding: 5px 10px 4px;
		border-bottom: 3px solid;
		border-image-slice: 1;
		border-image-source: linear-gradient(
			90deg,
			rgba(251, 99, 107, 1) 0%,
			rgba(97, 242, 234, 1) 100%
		);
	}
	.tooltip-arrow {
		width: 0;
		height: 0;
		border-style: solid;
		position: absolute;
		margin: 5px;
		border-color: #aeabab;
		z-index: 1;
	}
	&[x-placement^='top'] {
		margin-bottom: 5px;
		.tooltip-arrow {
			border-width: 5px 5px 0 5px;
			border-left-color: transparent !important;
			border-right-color: transparent !important;
			border-bottom-color: transparent !important;
			bottom: -5px;
			left: calc(50% - 5px);
			margin-top: 0;
			margin-bottom: 0;
		}
	}
	&[x-placement^='bottom'] {
		margin-top: 5px;
		.tooltip-arrow {
			border-width: 0 5px 5px 5px;
			border-left-color: transparent !important;
			border-right-color: transparent !important;
			border-top-color: transparent !important;
			top: -5px;
			left: calc(50% - 5px);
			margin-top: 0;
			margin-bottom: 0;
		}
	}
	&[x-placement^='right'] {
		margin-left: 5px;
		.tooltip-arrow {
			border-width: 5px 5px 5px 0;
			border-left-color: transparent !important;
			border-top-color: transparent !important;
			border-bottom-color: transparent !important;
			left: -5px;
			top: calc(50% - 5px);
			margin-left: 0;
			margin-right: 0;
		}
	}
	&[x-placement^='left'] {
		margin-right: 5px;
		.tooltip-arrow {
			border-width: 5px 0 5px 5px;
			border-top-color: transparent !important;
			border-right-color: transparent !important;
			border-bottom-color: transparent !important;
			right: -5px;
			top: calc(50% - 5px);
			margin-left: 0;
			margin-right: 0;
		}
	}
	&[aria-hidden='true'] {
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.15s, visibility 0.15s;
	}
	&[aria-hidden='false'] {
		visibility: visible;
		opacity: 1;
		transition: opacity 0.15s;
	}
}
</style>
