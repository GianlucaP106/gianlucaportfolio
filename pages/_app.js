import '../styles/globals.css';
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Home/Title.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
