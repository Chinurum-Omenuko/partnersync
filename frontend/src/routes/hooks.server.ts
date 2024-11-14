import { createAuth } from '@auth0/svelte-kit-auth0';

export const auth = createAuth({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientId: 'YOUR_AUTH0_CLIENT_ID',
  redirectUri: '/login/callback'
});
