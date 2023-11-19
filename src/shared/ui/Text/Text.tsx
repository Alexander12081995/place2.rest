"use client";

import React, { FC, PropsWithChildren } from "react";
import css from "./text.module.css";

type TypeText = "text" | "textHeading" | "textTertiary" | "textSecondary";
type ColorText =
    | "colorTextHeading"
    | "colorTextTertiary"
    | "colorTextSecondary"
    | "colorTextDisabled"
    | "colorWarningBase"
    | "colorErrorBase";

interface PropsText {
    type: TypeText;
    color: ColorText;
    className?: string;
}

export const Text: FC<PropsWithChildren<PropsText>> = ({ type, color, children, className }) => (
    <p className={`${css[type]} ${css[color]} ${className}`}>{children}</p>
);
