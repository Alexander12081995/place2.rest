import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Place2.rest",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={"ru"}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
