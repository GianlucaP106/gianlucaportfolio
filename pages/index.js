import Head from 'next/head';

import Title from "../components/Home/Title";
import Skills from "../components/Home/Skills";


export default function Home() {
    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bgColor">
                <Title />
                <Skills />
            </main>
        </div>
    );
}