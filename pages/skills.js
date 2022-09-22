import Head from 'next/head';
import Skills from "../components/Home/Skills";



export default function Home() {
    return (
        <div>
            <Head>
                <title>Gianluca&apos;s Portfolio | My skills</title>
                <meta name="description" content="My portofolio of skills and experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bgColor">
                <Skills />
            </main>
        </div>
    );
}