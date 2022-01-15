import 'windi.css';
import './global.css';

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

// import * as Sentry from '@sentry/nextjs';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Sentry.init({
    //   dsn: 'https://5b565ccc507f4a0d8d213f24c951cbbc@o144425.ingest.sentry.io/6150867',

    //   // Set tracesSampleRate to 1.0 to capture 100%
    //   // of transactions for performance monitoring.
    //   // We recommend adjusting this value in production
    //   tracesSampleRate: 1.0,
    // });
  }, []);
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
