import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";

import "../styles/global.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
