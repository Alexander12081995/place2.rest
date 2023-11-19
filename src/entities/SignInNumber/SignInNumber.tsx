"use client";

import React from "react";
import css from "./signInNumber.module.css";
import { Text } from "@/shared/ui/Text/Text";
import { InputPhoneNumber } from "@/shared/ui/InputPhoneNumber/InputPhoneNumber";

export const SignInNumber = () => {
    return (
        <div className={css.container}>
            <Text type={"textHeading"} color={"colorTextHeading"}>
                Вход
            </Text>
            <Text type={"text"} color={"colorTextHeading"} className={css.subTitle}>
                Введите номер телефона, чтобы войти или зарегистрироваться
            </Text>
            <InputPhoneNumber />

            <Text type="textTertiary" color="colorTextTertiary" className={css.politic}>
                Нажимая «Продолжить», вы принимаете{" "}
                <span className={css.text}>пользовательское соглашение и политику конфиденциальности</span>
            </Text>
        </div>
    );
};
