<template>
	<main>
		<div class="first">
			<h1>Witajcie w Gractwie!</h1>
			<p>
				Jesteśmy społecznością - grupą ludzi - których kręcą gry. Proste, nie?
				<br />
			</p>
			<gractwosvg class="g" />
		</div>
		<div class="second">
			<h1>Spis Moderacji</h1>
			<div class="cardContainer">
				<card
					name="Jakub Mańczak"
					photo="j4mesen.png"
					desc="j4mesen | wannabe programista"
					link="/j4mesen"
				/>
				<card
					name="Olek Kulka"
					photo="olek.png"
					desc="KuOlek | scooby doo stan"
					link="/kuolek"
				/>
				<card
					name="Adam Cała"
					photo="adam.png"
					desc="BeElephant | dosłowny słoń"
					link="/be-elephant"
				/>
				<card
					name="Jarek Kortals"
					photo="jarooko.png"
					desc="Jarooko | nadal tu jest?"
					link="/jarooko"
				/>
				<card
					name="Jakub Mollin"
					photo="mollin.png"
					desc="Mollin | resident grinder"
					link="/mollin"
				/>
				<card
					name="Franek Cała"
					photo="franek.png"
					desc="BavilGravlax | secret society blanket"
					link="/bavil-gravlax"
				/>
			</div>
		</div>
		<div class="third">
			<h1>Geneza Gractwa</h1>
			<p class="textblock">
				Gractwo zostało założone w 2020 roku w odpowiedzi na rozłam PGTF i na
				<a href="https://youtu.be/zjedLeVGcfE">sytuację z PGTF</a> związaną.
				Serwer discordowy PGTF pozostający pod kontrolą administracji Gractwa
				został przeniesiony w stan przejściowy do czasu gdy decyzja o powstaniu
				Gractwa została podjęta. Po tych wydarzeniach strona internetowa oraz
				grupa facebookowa Gractwa zostały utworzone. Aktywność na grupie
				facebookowej nigdy sie nie rozwinęła wystarczająco, by przekształcić sie
				w pełnoprawną społeczność, ale serwer discord działa cały czas. Strona
				internetowa służy głównie do uproszczenia linków - do Discorda i
				Facebooka. <br />
				<br />
				Po co więc to piszę? ...Potrzebuję tekstu do zapełnienia strony. <br />
				<br />
				~j4mesen
			</p>
		</div>
		<div class="fourth">
			<p>
				Gractwo 2020-2021.
				<router-link to="/git" target="_blank">GitHub</router-link>
			</p>
		</div>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import gractwosvg from '@/components/gractwosvg.vue'; // @ is an alias to /src
	import card from '@/components/card.vue';

	export default defineComponent({
		name: 'Home',
		components: {
			gractwosvg,
			card,
		},
	});
</script>

<style lang="scss" scoped>
	main {
		padding: 3rem 8rem;
		a {
			color: #fb636b;
		}
		.g {
			position: absolute;
			top: 0;
			right: 15%;
			animation-name: logovibe;
			animation-iteration-count: infinite;
			animation-duration: 2s;
			z-index: -10;
		}
		.second {
			margin-top: 18rem;
			.cardContainer {
				display: inline-flex;
				flex-wrap: wrap;
				margin-right: 0.1rem;
			}
		}
		.third {
			margin-top: 2rem;
		}
		.fourth {
			margin-top: 4rem;
		}
		.textblock {
			padding-right: 40%;
			text-align: justify;
		}
	}

	@keyframes logovibe {
		0% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(-9deg) scale(0.9);
		}
		100% {
			transform: rotate(5deg);
		}
	}

	@media only screen and (max-width: 872px) {
		main {
			padding: 3rem 1rem;
			.g {
				position: absolute;
				top: 8.5%;
				width: 184px;
			}
			.textblock {
				padding-right: 2%;
			}
		}
	}
</style>
