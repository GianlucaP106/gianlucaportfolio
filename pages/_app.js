import '../styles/globals.css';
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";

import "../styles/Layout/Navibar.css";


import "../styles/comps/Skill.css";

import "../styles/Home/Title.css";
import "../styles/Home/Skills.css";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}
export default MyApp;