export const environment = {
  production: false,
  // Read from the globally injected window.__env object created by generate-env.js
  apiUrl: (window as any).__env ? (window as any).__env.API_BASE_URL : 'https://fallback-dev-api.com/'
};
