import Head from 'next/head';
import Contact from '../components/Contact/Contact';



export default function Home() {
    return (
        <div>
            <Head>
                <title>Gianluca&apos;s Portfolio | Contact Me</title>
                <meta name="description" content="My portofolio of skills and experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bgColor">
                <Contact />
            </main>
        </div>
    );
}