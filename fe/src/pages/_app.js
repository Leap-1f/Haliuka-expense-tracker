import "@/styles/globals.css";
import {ContextProvider} from "../components/utils/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
