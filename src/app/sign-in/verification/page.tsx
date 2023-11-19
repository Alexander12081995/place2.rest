import React from "react";
import css from "./verification.module.css";
import { WrapperSignIn } from "@/features/WrapperSignIn/WrapperSignIn";
import { SignInVerification } from "@/entities/SignInVerification/SignInVerefication";

const Verification = () => {
    return (
        <div className={css.container}>
            <WrapperSignIn>
                <SignInVerification />
            </WrapperSignIn>
        </div>
    );
};

export default Verification;
