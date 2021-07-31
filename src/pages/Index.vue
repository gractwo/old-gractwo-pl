<template>
	<main>
		<header>
			<g-link
				to="/"
				style="color: inherit; text-decoration: inherit;background-color: inherit"
			>
				<div style="display:flex;flex-direction:row">
					<g-image src="~/assets/main-logo-x64.png" width="64"></g-image>
					<h1>Gractwo</h1>
				</div>
			</g-link>
			<p style="text-align: center">
				Strona w trakcie rewrite-u! Zapraszamy później.
			</p>
		</header>
		<section>
			<h2>
				Witajcie w Gractwie!
			</h2>
			<p>
				Jesteśmy społecznością - grupą ludzi - których kręcą gry. Proste, nie?
			</p>
		</section>
		<section>
			<h2>Geneza i opis Gractwa</h2>
			<p style="text-align: justify">
				Gractwo zostało założone w 2020 roku w odpowiedzi na rozłam PGTF i na
				<a href="/pgtf-theme" target="_blank">sytuację z PGTF</a> powiązaną.
				Serwer discordowy PGTF, pozostający nadal pod kontrolą naszej
				administracji został przeniesiony w stan przejściowy do czasu podjęcia
				decyzji o powstaniu Gractwa, po czym został w serwer dla Gractwa
				przekształcony. Została utworzona grupa facebookowa, oraz strona
				internetowa. Aktywność na grupie facebookowej nigdy nie rozwinęła się
				wystarczająco by przekształcić się w pełnoprawną społeczność, ale serwer
				discord cały czas funkcjonuje jako nasze małe, ciasne i własne miejsce
				spotkań. Strona internetowa funkcjonuje głównie jako skracacz linków.
			</p>
		</section>
		<section>
			<h2>Spis Moderacji</h2>
			<p>
				Ludzie stojący za Gractwem - in progress!
			</p>
			<div class="cards">
				<Card id="jamesen" name="Jakub Mańczak" photo="~/assets/cards/.png" />
				<Card id="kuolek" name="Olek Kulka" />
				<Card id="mollin" name="Jakub Mollin" />
				<Card id="adam" name="Adam Cała" />
				<Card id="franek" name="Franek Cała" />
			</div>
		</section>
		<section>
			<h2>Status Bota Discordowego</h2>
			<p>
				Sprawdź jak się ma nasz bot discordowy - in progress!
			</p>
			<BotCard />
		</section>
		<section>
			<h3>Gractwo 2020-2021</h3>
			<p>
				Kod dostępny na
				<a href="/github" target="_blank">GitHubie</a>.
			</p>
		</section>
	</main>
</template>

<script>
import Card from '~/components/Card.vue';
import BotCard from '~/components/BotCard.vue';

export default {
	metaInfo: {
		title: 'główna',
	},
	components: {
		Card,
		BotCard,
	},
};
</script>

<style lang="scss">
main {
	max-width: 850px;
	margin: 0 auto;
	padding-left: 24px;
	padding-right: 24px;
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem;
		img {
			margin-top: 0.25rem;
			margin-right: 0.5rem;
		}
	}
	section {
		padding: 2rem 0 4rem;
		.cards {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
	h1 {
		font-size: 3rem;
	}
}
</style>
