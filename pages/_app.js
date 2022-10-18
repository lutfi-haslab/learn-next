import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </ThirdwebProvider>
    </SessionProvider>
  );
}

export default MyApp;
