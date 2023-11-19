import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface State {
    verificationCode: Array<string>;
    isVerification: boolean;
    isValidPhoneNumber: boolean;
}

const initialState: State = {
    verificationCode: [],
    isVerification: false,
    isValidPhoneNumber: true,
};

export const slice = createSlice({
    name: "verification",
    initialState,
    reducers: {
        setVerificationCode: (state, action: PayloadAction<Array<string>>) => {
            state.verificationCode = action.payload;
        },
        handleIsVerification: (state, action: PayloadAction<boolean>) => {
            state.isVerification = action.payload;
        },
        handleIsValidPhone: (state, action: PayloadAction<boolean>) => {
            state.isValidPhoneNumber = action.payload;
        },
    },
});

export const { setVerificationCode, handleIsVerification, handleIsValidPhone } = slice.actions;

export default slice.reducer;
