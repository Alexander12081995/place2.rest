"use client";

import React, { useEffect, useState } from "react";
import css from "./signInVerification.module.css";
import { Text } from "@/shared/ui/Text/Text";
import { VerificationCode } from "@/shared/ui/VerificationCode/VerificationCode";
import { Button } from "@/shared/ui/Button/Button";
import { Timer } from "@/shared/ui/Timer/Timer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/shared/hooks/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SignInVerification = () => {
    const router = useRouter();
    const isVerification = useAppSelector((state) => state.verification.isVerification);
    const verificationCodeUser = useAppSelector((state) => state.verification.verificationCode);
    const isDisabledVerificationCodeUser = verificationCodeUser.every((i) => i !== "");
    const [code, setCode] = useState("");
    const handleCklickCode = () => {
        setCode("1234");
        setTimeout(() => {
            setCode("");
        }, 100);
    };
    useEffect(() => {
        if (isVerification) {
            localStorage.removeItem("phoneNumber");
        }
    }, [isVerification]);

    return (
        <div>
            {!isVerification ? (
                <div>
                    <div className={css.arrow} onClick={() => router.back()}>
                        <ArrowLeftOutlined />
                    </div>
                    <div className={css.blockContent}>
                        <Text type="textHeading" color="colorTextHeading">
                            Код
                        </Text>
                        <Text type="text" color="colorTextHeading" className={css.text}>
                            На указанный номер поступит звонок, впишите последние 4 цифры этого номера
                        </Text>
                        <VerificationCode verificationCode={code} className={css.verificationCode} />
                        <Button
                            onClick={handleCklickCode}
                            className={css.btn}
                            disabled={!isDisabledVerificationCodeUser}
                        >
                            Проверить
                        </Button>
                        <Timer className={css.timer} />
                    </div>
                </div>
            ) : (
                <div className={css.blockContent}>
                    <Image src="/signIn/success.png" alt="success" width={80} height={80} />
                    <Text type="textSecondary" color="colorTextHeading" className={css.success}>
                        Поздравляем!
                    </Text>
                    <Text type="text" color="colorTextTertiary">
                        Вы успешно зарегистрировались на нашей платформе и через пару секунд увидимся на главной
                        странице!
                    </Text>
                </div>
            )}
        </div>
    );
};
