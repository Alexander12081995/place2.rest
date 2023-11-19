"use client";

import React, { FC, PropsWithChildren } from "react";
import css from "./wrapperSignIn.module.css";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "@/shared/store/store";

export const WrapperSignIn: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            <div className={css.wrapper}>
                <div className={css.leftBlock}>
                    <Image src={"/signIn/logo.svg"} alt="logo" width={140} height={34} className={css.logo} />
                </div>
                <div className={css.rightBlock}>{children}</div>
            </div>
        </Provider>
    );
};
