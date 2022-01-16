// @ts-nocheck

import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://5b565ccc507f4a0d8d213f24c951cbbc@o144425.ingest.sentry.io/6150867',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


class MyDocument extends Document {
  render() {

    return (
      <Html data-theme="corporate" lang="en">
        <Head>
          <script
            async
            src="/js/gtag.js?id=G-WX9PVQ38VH"
          // src="https://www.googletagmanager.com/gtag/js?id=G-WX9PVQ38VH"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-WX9PVQ38VH');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2784557,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `,
            }}
          />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
