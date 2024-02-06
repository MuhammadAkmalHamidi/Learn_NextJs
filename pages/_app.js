import "@/styles/globals.css";
import { userContextProvider } from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <userContextProvider>
      <Component {...pageProps} />
    </userContextProvider>
  );
}
