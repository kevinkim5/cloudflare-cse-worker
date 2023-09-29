// Export a default object containing event handlers
export default {
	// The fetch handler is invoked when this worker receives a HTTP(S) request
	// and should return a Response (optionally wrapped in a Promise)
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		// Update this based on the authentication details received in the request
		let EMAIL = 'test';
		let TIMESTAMP = new Date();
		let COUNTRY = 'SG';

		switch (url.pathname) {
			case '/':
				return new Response(`<a href="${url.origin}/secure">Use secure path</a>`, {
					headers: { 'Content-Type': 'text/html' },
				});
			case '/secure':
				return new Response(`${EMAIL} authenticated at ${TIMESTAMP} from <a href="${url.origin}/secure/${COUNTRY}"}>${COUNTRY}</a>`, {
					headers: { 'Content-Type': 'text/html' },
				});
		}

		return new Response(`flags`, {
			headers: { 'Content-Type': 'text/html' },
		});
	},
};
