// Polyfill localStorage for Node.js SSR
if (typeof globalThis.localStorage === 'undefined') {
  const store: Record<string, string> = {};
  globalThis.localStorage = {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (index: number) => Object.keys(store)[index] ?? null,
  } as Storage;
}

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
// The server renders the complete route table for static generation. The
// browser uses a smaller homepage shell and downloads this table only after
// navigating away from the landing page.
import App from './FullApp';

export function render(url: string) {
  const helmetContext = {} as { helmet?: any };

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    html,
    head: helmet
      ? [
          helmet.title?.toString() ?? '',
          helmet.meta?.toString() ?? '',
          helmet.link?.toString() ?? '',
          helmet.script?.toString() ?? '',
        ].join('\n')
      : '',
  };
}
