import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      <ChakraProvider theme={theme}>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </ChakraProvider>
    </div>
  );
}

export default App;
