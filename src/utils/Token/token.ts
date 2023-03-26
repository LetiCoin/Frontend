import { Dispatch, useState } from "react";

export type Token = {
    accessToken?: string;
    refreshToken?: string;
};

export interface IUseToken {
    (): [Token | undefined, ISetToken];
}

export interface ISetToken {
    (token: Token): void;
}

const useToken: IUseToken = () => {
    const getToken = (): Token | undefined => {
        if (typeof window === "undefined") {
            return;
        }
        const tokenString = localStorage.getItem("token");
        const userToken = tokenString ? JSON.parse(tokenString) : undefined;
        return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken: ISetToken = (userToken) => {
        if (typeof window === "undefined") {
            return;
        }
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    };

    return [token, saveToken];
};

export default useToken;
