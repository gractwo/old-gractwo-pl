<template>
	<!-- <g-image alt="" :src="require(`../assets/spis/${photo}`)" /> -->
	<div class="card">
		<div class="cardInnerFlex">
			<div class="cardInnerPhoto">
				<!-- <img alt="" :src="require(`~/assets/cards/${photo}`)" /> -->
				<g-image
					:src="require(`~/assets/cards/${photo}.png`)"
					:alt="`Zdjęcie ${name}`"
					v-if="photo"
					width="128"
				/>
				<img
					:src="`${photoDyn}`"
					alt="Dynamic photo"
					v-if="photoDyn"
					style="width: 128px"
				/>
			</div>
			<div class="cardInnerInfo">
				<div class="cardInnerInfoTitle">
					<h3>{{ name }}</h3>
					<p>{{ nickname }}</p>
				</div>
				<div class="cardInnerInfoDescription">
					<p style="text-align: left">
						{{ description }}
					</p>
				</div>
				<div class="cardInnerInfoButtons">
					<g-link
						:to="`${external}`"
						v-if="external"
						v-tooltip="`${externalTooltip}`"
						target="_blank"
					>
						<i class="fas fa-link" />
					</g-link>
					<g-link :to="`${steam}`" v-if="steam" target="_blank">
						<i class="fab fa-steam" />
					</g-link>
					<g-link :to="`${github}`" v-if="github" target="_blank">
						<i class="fab fa-github"></i>
					</g-link>
					<g-link :to="`${twitter}`" v-if="twitter" target="_blank">
						<i class="fab fa-twitter"></i>
					</g-link>
					<g-link :to="`${facebook}`" v-if="facebook" target="_blank">
						<i class="fab fa-facebook"></i>
					</g-link>
					<a
						href=""
						v-if="discord"
						@click="copyDiscord()"
						v-tooltip.top-center="`Kliknij by skopiować do schowka!`"
					>
						<i class="fab fa-discord" />
						{{ discord }}
					</a>
					<div
						class="cardOnlineIndicator"
						v-tooltip="`Offline.`"
						v-if="onlineIndicator == 0"
					/>
					<div
						class="cardOnlineIndicator isOnline"
						v-tooltip="`Online`"
						v-if="onlineIndicator == 1"
					/>
				</div>
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
		photoDyn: String,
		description: String,
		external: String,
		externalTooltip: String,
		steam: String,
		github: String,
		twitter: String,
		facebook: String,
		discord: String,
		onlineIndicator: Number,
	},
	methods: {
		copyDiscord: function() {
			this.$copyText(this.discord);
			this.$toasted.show(`Skopiowano '${this.discord}' do schowka!`, {
				duration: 2000,
				className: 'toastcss',
				icon: 'check',
			});
		},
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
	height: 8rem;
	transition-duration: var(--trandur);
	.cardInnerFlex {
		display: flex;
		flex-direction: row;
		.cardInnerPhoto {
			min-width: 8rem;
			height: 8rem;
			background-color: black;
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
			img {
				width: 8rem;
				border-top-left-radius: 3px;
				border-bottom-left-radius: 3px;
			}
		}
		.cardInnerInfo {
			padding: 0.8rem;
			padding-top: 0.6rem;
			min-height: 100%;
			width: 100%;
			position: relative;
			.cardInnerInfoTitle {
				display: flex;
				flex-direction: row;
				align-items: baseline;
				padding-bottom: 0.3rem;
				h3 {
					margin-right: 1rem;
				}
				p {
					color: var(--graytext);
				}
			}
			.cardInnerInfoDescription {
				font-size: 1rem;
			}
			.cardInnerInfoMeta {
				display: flex;
				flex-direction: row;
				align-items: baseline;
				color: var(--graytext);
				margin-top: 0.4rem;
				i {
					margin-right: 0.3rem;
				}
			}
			.cardInnerInfoButtons {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				position: absolute;
				bottom: 0.5rem;
				right: 0.5rem;
				// margin-top: 0.6rem;
				a {
					color: var(--graytext);
					text-decoration: inherit;
					padding: 0.2rem;
					margin: 0 0.2rem;
					border-radius: 3px;
					&:hover,
					&:focus {
						background-color: var(--red);
						color: var(--black);
					}
				}
				.cardOnlineIndicator {
					background-color: var(--graytext);
					width: 0.5rem;
					height: 0.5rem;
					// margin: 0.5rem;
					// background-color: var(--graytext);
					border-radius: 50%;
					align-self: center;
					&.isOnline {
						background-color: var(--green);
					}
				}
			}
		}
	}
	&:hover,
	&:focus {
		// background-color: var(--gray);
		border: 1px solid transparent;
		box-shadow: 0 0 10px black;
		outline: none;
	}
}
@media only screen and (max-width: 850px) {
	.card {
		width: 200%;
		h3 {
			font-size: 1rem;
		}
	}
}
@media only screen and (max-width: 460px) {
	.cardInnerPhoto {
		display: none;
	}
	.cardInnerFlex {
		min-height: 8rem;
	}
}
</style>
