// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import VueClipboard from 'vue-clipboard2';
import VTooltip from 'v-tooltip';

export default function(Vue, { router, head, isClient }) {
	head.script.push({
		src: 'https://kit.fontawesome.com/0b1492a165.js',
		crossorigin: 'anonymous',
		body: true,
	});
	Vue.use(VTooltip);
	Vue.use(VueClipboard);
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
}
