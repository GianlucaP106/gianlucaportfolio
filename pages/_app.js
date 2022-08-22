import '../styles/globals.css';
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";

import "../styles/Layout/Navibar.css";
import "../styles/Layout/Footer.css";


import "../styles/comps/Skill.css";
import "../styles/comps/SkillPopup.css";
import "../styles/comps/ExperienceCard.css";

import "../styles/Home/Title.css";
import "../styles/Home/Skills.css";
import "../styles/Home/Experience.css";

import "../styles/contact/Contact.css";
import "../styles/contact/ContactAni.css";
import "../styles/contact/ContactForm.css";


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