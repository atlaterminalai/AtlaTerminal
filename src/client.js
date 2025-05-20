// Simple JS client for AtlaTerminal API
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.atlaterminal.io/v1',
  headers: { 'x-api-key': process.env.AT_API_KEY }
});

export async function getTrending() {
  const res = await api.get('/tokens/trending');
  return res.data;
}
