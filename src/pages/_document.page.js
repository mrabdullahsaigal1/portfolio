import GothamBook from 'assets/fonts/gotham-book.woff2';
import GothamMedium from 'assets/fonts/gotham-medium.woff2';
import { fontStyles, tokenStyles } from 'components/ThemeProvider';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="apple-touch-icon" href="/icon-256.png" />
        <link type="text/plain" rel="author" href="/humans.txt" />

        <link rel="preload" href={GothamMedium} as="font" crossOrigin="true" />
        <link rel="preload" href={GothamBook} as="font" crossOrigin="true" />

        {/* Basic Open Graph tags */}
        <meta property="og:title" content="Gensols" />
        <meta property="og:description" content="Software House" />
        <meta property="og:image" content="/social-image.png" />
        <meta property="og:url" content="https://www.gensols.org/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags (optional) */}
        <meta name="twitter:card" content="website_preview" />
        <meta name="twitter:title" content="Gensols" />
        <meta name="twitter:description" content="Software House" />
        <meta name="twitter:image" content="/social-image.png" />
        <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
        <style dangerouslySetInnerHTML={{ __html: tokenStyles }} />
        {/* Start of Tawk.to Script */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66660beb9a809f19fb3bd8ee/1hvv9t4hb';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `
        }} />
        {/* End of Tawk.to Script */}
      </Head>
      <body data-theme="dark" tabIndex={-1}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const initialTheme = JSON.parse(localStorage.getItem('theme'));
              document.body.dataset.theme = initialTheme || 'dark';
            `,
          }}
        />
        <Main />
        <NextScript />
        <div id="portal-root" />
      </body>
    </Html>
  );
}
