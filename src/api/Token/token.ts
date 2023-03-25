import { Dispatch, useState } from "react";

export type Token = {
    accessTokens?: string[];
    refreshTokens?: string[];
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
        const userToken = JSON.parse(tokenString);
        return userToken;
    };

    const saveToken: ISetToken = (userToken) => {
        if (typeof window === "undefined") {
            return;
        }
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    };

    const [token, setToken] = useState(getToken());
    return [token, saveToken];
};

export default useToken;
