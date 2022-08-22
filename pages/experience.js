import Head from 'next/head';
import Experience from '../components/Home/Experience';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Gianluca&apos;s Portfolio : My Experience</title>
                <meta name="description" content="My portofolio of skills and experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bgColor">
                <Experience />
            </main>
        </div>
    );
}