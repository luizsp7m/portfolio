import "../styles/global.scss";

import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";
import { ThemeProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
