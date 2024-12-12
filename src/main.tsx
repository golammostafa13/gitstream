import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Analytics } from '@vercel/analytics/react';
import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <App />
          <Analytics />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
