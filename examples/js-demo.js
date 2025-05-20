import { getTrending } from '../src/client.js';

(async () => {
  const tokens = await getTrending();
  console.log('Trending tokens:', tokens);
})();
