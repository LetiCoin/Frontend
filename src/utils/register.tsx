import { paths } from "@/configs/apiconfig";
import { ISetToken } from "@/utils/Token/token";
import { Dispatch, SetStateAction } from "react";

const register = async (
    email: string,
    login: string,
    password: string,
    role: string,
    setToken: ISetToken,
    setError: Dispatch<SetStateAction<string>>
) => {
    try {
        const response = await fetch(paths.register, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email,
                login,
                password,
                role,
            }),
        });
        const data = await response.json();

        if (data) {
            const accessToken: string = data.accessToken;
            const refreshToken: string = data.refreshToken;
            setToken({ accessToken, refreshToken });
            console.log(data);
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        }
    }
};

export default register;
