import "../styles/global.scss";

import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;