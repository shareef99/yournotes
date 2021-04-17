import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
    return (
        <>
            <Head>
                <title>Your OU Notes | Home</title>
                <meta
                    name="keywords"
                    content="isl, notes, engineering, shareef, shareef99, ou, be, question papers, osmania university
                        students, ou students, engineering notes, be notes, important questions, be syllabus"
                />
            </Head>
            <section>
                <Main />
            </section>
        </>
    );
}
