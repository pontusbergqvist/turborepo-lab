import "../styles/globals.css";
// include styles from the ui package
import Layout from "../components/layout";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
