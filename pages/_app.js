import "../styles/style.css";
import "../styles/Test.css";
import "../styles/bootstrap.min.css";
import "../styles/sb-admin-2.min.css";
import "../styles/responsive.css";
import "../styles/font-awesome.min.css";

//* Library Imports
import { useEffect } from "react";

//* Next Imports
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        //? Getting Login Status
        var locallog = localStorage.getItem("user_login")
            ? JSON.parse(localStorage.getItem("user_login"))
            : { login: false };

        if (locallog.login) {
            //? Login Done
            var excludeRouts = ["/login", "/register"];
            if (excludeRouts.indexOf(router.pathname) === -1) {
                router.push(router.pathname);
            } else {
                router.push("/");
            }
        } else {
            //? Login Not Done
            if (router.pathname != "/register") {
                router.push("/login");
            }
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta name="author" content="FEASTA" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
                    rel="stylesheet"
                />

                <script src="/vendor/jquery/jquery.min.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="/js/sb-admin-2.min.js"></script>
                <script src="/js/Test.js"></script>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
