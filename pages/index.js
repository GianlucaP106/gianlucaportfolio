import Head from 'next/head';

import Title from "../components/Home/Title";
import Skills from "../components/Home/Skills";
import Contact from '../components/Contact/Contact';
import Experience from '../components/Home/Experience';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Gianluca&apos;s Portfolio</title>
                <meta name="description" content="My portofolio of skills and experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bgColor">
                <Title />
                <Skills />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}