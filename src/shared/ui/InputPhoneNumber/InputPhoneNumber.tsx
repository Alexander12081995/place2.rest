"use client";

import { useAppDispatch } from "@/shared/hooks/hooks";
import { handleIsValidPhone } from "@/shared/store/verification/slice";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "../Button/Button";
import css from "./inputPhoneNumber.module.css";
import { Text } from "../Text/Text";
import { useRouter } from "next/navigation";

interface PropsCountry {
    countryCode: string;
    dialCode: string;
}

export const InputPhoneNumber = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState<PropsCountry>({
        countryCode: "ru",
        dialCode: "7",
    });
    const [valid, setValid] = useState(true);

    const validatePhoneNumber = (value: string) => {
        return /^7\d{10}$/.test(value);
    };

    const handleChange = (value: string, country: PropsCountry) => {
        setPhoneNumber(value);
        setCountry(country);
        if (!validatePhoneNumber(value)) {
            setValid(false);
        } else {
            setValid(true);
        }
    };
    const handleSubmit = () => {
        if (!validatePhoneNumber(phoneNumber)) {
            setValid(false);
        } else {
            setValid(true);
            localStorage.setItem("phoneNumber", phoneNumber);
            router.push("/sign-in/verification");
        }
    };

    useEffect(() => {
        setPhoneNumber(`+${country.dialCode}`);
    }, [country.countryCode]);
    useEffect(() => {
        dispatch(handleIsValidPhone(valid));
    }, [valid]);
    useEffect(() => {
        const number = localStorage.getItem("phoneNumber");
        if (number) {
            setPhoneNumber(number);
        }
    }, []);

    return (
        <div>
            <PhoneInput
                country={country.countryCode}
                value={phoneNumber}
                onChange={handleChange}
                inputProps={{ required: true }}
                inputStyle={{ borderRadius: "5px", width: "100%" }}
                buttonStyle={{ borderRadius: "5px 0 0 5px" }}
            />
            {!valid && phoneNumber === "" && (
                <Text type="text" color="colorWarningBase" className={css.errorMessage}>
                    Введите номер телефона
                </Text>
            )}
            {!valid && phoneNumber !== "" && (
                <Text type="text" color="colorErrorBase" className={css.errorMessage}>
                    Формат номера должен быть +7 ХХХ ХХХ ХХ ХХ
                </Text>
            )}
            <Button onClick={handleSubmit} className={css.btn} disabled={!valid}>
                Отправить
            </Button>
        </div>
    );
};
