import "../styles/global.scss";

import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";
import { ThemeProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps, theme }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

interface AppOwnProps {
  theme: "light" | "dark";
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  let theme: "dark" | "light" = "dark";

  const ctx = await App.getInitialProps(context);

  if (context.ctx.req) {
    const cookies = context.ctx.req.headers.cookie;
    theme = cookies?.includes("theme=light") ? "light" : "dark";
  }

  return { ...ctx, theme };
};

export default MyApp;
