import { paths } from "../../apiconfig";
import { ISetToken } from "@/api/Token/token";

export async function register(email: string, login: string, password: string, role: string, setToken: ISetToken, setError) {
    try {

        const response = await fetch(paths.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email,
                login,
                password,
                role
            }),
        });
        const data = await response.json();

        if (data) {
            const accessToken = data.accessToken;
            const refreshToken = data.refreshToken;
            setToken({ accessToken, refreshToken });
            console.log(data);
        }
    } catch (err) {
        setError(err.message);
    }
}
