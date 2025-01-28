import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/assets/favicon.svg" />
          <meta name="theme-color" content="#6673d7" />

          <meta name="application-name" content="Portfólio - Luiz Oliveira" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Portfólio - Luiz Oliveira"
          />
          <meta
            name="description"
            content="Portfólio pessoal com projetos desenvolvidos durante minha trajetória"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#556BD1" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/assets/favicon.svg" />

          <meta property="og:title" content="Portfólio - Luiz Oliveira" />
          {/* <meta property="og:description" content="Portfólio pessoal com projetos que desenvolvi durante minha trajetória como desenvolvedor" /> */}
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Portfólio - Luiz Oliveira" />
          <meta property="og:image" content="/design/desktop-preview.jpg" />
          <meta
            property="og:image:secure_url"
            content="/design/desktop-preview.jpg"
          />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="600" />

          <meta name="twitter:title" content="Portfólio - Luiz Oliveira" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/design/desktop-preview.jpg" />
          <meta
            name="twitter:image:src"
            content="/design/desktop-preview.jpg"
          />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="600" />
          <meta name="twitter:image:height" content="200" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
