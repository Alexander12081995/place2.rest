"use client";

import React from "react";
import css from "./home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className={css.container}>
            <h1 className={css.title} onClick={() => router.push("/sign-in")}>
                Войти
            </h1>
        </div>
    );
}
