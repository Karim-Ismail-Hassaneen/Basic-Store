/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Styles from "./back.module.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
const btnFont = Montserrat({ subsets: ["latin"] });
const Back = () => {
    return (
        <>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
            </Head>

                <button className={`${Styles.btn} ${btnFont.className}`}>
                        Products
                </button>
        </>
    );
};

export default Back;
