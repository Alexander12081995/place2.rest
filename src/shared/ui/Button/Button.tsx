"use client";

import React, { FC, PropsWithChildren } from "react";
import css from "./button.module.css";

interface PropsButton {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({ onClick, children, className, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`${css.button} ${disabled && css.buttonDisabled} ${className}`}
    >
        {children}
    </button>
);
