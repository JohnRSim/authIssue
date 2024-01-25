// src/hooks.server.js

import { SvelteKitAuth } from '@auth/sveltekit';
import Tiktok from "@auth/core/providers/tiktok";


// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle = SvelteKitAuth({
	providers: [
		Tiktok({ clientId: 'TIKTOK_CLIENT_ID', clientSecret: 'TIKTOK_CLIENT_SECRET' }),
		
	],
	secret: 'AUTH_SECRET',
	trustHost: true,
});
