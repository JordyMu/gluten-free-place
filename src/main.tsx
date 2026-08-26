import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const root = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Only hydrate when the HTML was actually pre-rendered (SSG output).
// If the file was built without the prerender step, the root is empty and
// hydration would fail, leaving a blank page — client-render instead.
const hasPrerenderedMarkup = root.childElementCount > 0;

if (import.meta.env.PROD && hasPrerenderedMarkup) {
  try {
    hydrateRoot(root, app, { onRecoverableError: () => {} });
  } catch {
    root.innerHTML = "";
    createRoot(root).render(app);
  }
} else {
  root.innerHTML = "";
  createRoot(root).render(app);
}
