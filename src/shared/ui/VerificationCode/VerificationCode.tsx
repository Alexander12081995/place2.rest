"use client";

import React, { useState, useRef, useEffect, FC } from "react";
import css from "./verificationCode.module.css";
import { Text } from "../Text/Text";
import { useAppDispatch } from "@/shared/hooks/hooks";
import { handleIsVerification, setVerificationCode } from "@/shared/store/verification/slice";

interface PropsVerificationCode {
    verificationCode: string;
    className?: string;
}

export const VerificationCode: FC<PropsVerificationCode> = ({ verificationCode, className }) => {
    const dispatch = useAppDispatch();
    const [code, setCode] = useState<Array<string>>(["", "", "", ""]);
    const [verification, setVerification] = useState(true);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    useEffect(() => {
        inputRefs[0].current?.focus();
    }, []);
    useEffect(() => {
        if (verificationCode !== "" && verification === true) {
            setVerification(Boolean(JSON.stringify(verificationCode.split("")) === JSON.stringify(code)));
            dispatch(
                handleIsVerification(Boolean(JSON.stringify(verificationCode.split("")) === JSON.stringify(code)))
            );
        }
    }, [verificationCode]);
    useEffect(() => {
        if (!verification) {
            setTimeout(() => {
                setCode(["", "", "", ""]);
                setVerification(true);
            }, 1000);
        }
    }, [verification]);
    useEffect(() => {
        dispatch(setVerificationCode(code));
    }, [code]);

    const handleInputChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (value.length === 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };

    return (
        <div className={className}>
            <div className={css.group}>
                <input
                    type="text"
                    ref={inputRefs[0]}
                    value={code[0]}
                    placeholder="_"
                    maxLength={1}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    className={`${css.input} ${!verification && css.error}`}
                />
                <input
                    type="text"
                    ref={inputRefs[1]}
                    value={code[1]}
                    placeholder="_"
                    maxLength={1}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    className={`${css.input} ${!verification && css.error}`}
                />
                <input
                    type="text"
                    ref={inputRefs[2]}
                    value={code[2]}
                    placeholder="_"
                    maxLength={1}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                    className={`${css.input} ${!verification && css.error}`}
                />
                <input
                    type="text"
                    ref={inputRefs[3]}
                    value={code[3]}
                    placeholder="_"
                    maxLength={1}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                    className={`${css.input} ${!verification && css.error}`}
                />
            </div>
            {!verification ? (
                <Text type="text" color="colorErrorBase" className={css.errorMessage}>
                    Код неверный
                </Text>
            ) : null}
        </div>
    );
};
