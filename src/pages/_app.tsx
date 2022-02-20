import "../styles/global.scss";
import "aos/dist/aos.css";
import 'nprogress/nprogress.css';

import NProgress from 'nprogress';

import { Router } from 'next/dist/client/router';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
