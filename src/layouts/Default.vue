<template>
	<div>
		<slot />
	</div>
</template>

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
		}
	}
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
