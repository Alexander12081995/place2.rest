"use client";

import React, { useEffect, useState, FC } from "react";
import css from "./timer.module.css";
import { Text } from "../Text/Text";

interface PropsTimer {
    className?: string;
}

export const Timer: FC<PropsTimer> = ({ className }) => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const handleReplayTimer = () => {
        setSeconds(30);
    };

    return (
        <div className={className}>
            <Text type="text" color="colorTextDisabled">
                {seconds ? (
                    `Новый код через ${seconds} сек`
                ) : (
                    <span className={css.replay} onClick={handleReplayTimer}>
                        Повторить звонок
                    </span>
                )}
            </Text>
        </div>
    );
};
