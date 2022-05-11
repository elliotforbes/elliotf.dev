import Layout from '../components/layout';
import '../styles/globals.css';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script defer data-domain="elliotf.dev" src="https://plausible.io/js/plausible.js"></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;