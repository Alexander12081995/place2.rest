import React from "react";
import css from "./signIn.module.css";
import { WrapperSignIn } from "@/features/WrapperSignIn/WrapperSignIn";
import { SignInNumber } from "@/entities/SignInNumber/SignInNumber";

const SignIn = () => {
    console.log("Place2.rest");

    return (
        <div className={css.container}>
            <WrapperSignIn>
                <SignInNumber />
            </WrapperSignIn>
        </div>
    );
};

export default SignIn;
