import apiconfig from '@/configs/apiconfig';

import React, { FormEventHandler } from 'react'



import Layout from '@/components/Layout/Layout';
import css from './Home.module.css';
import useToken from '@/utils/Token/token';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



function TestPage() {

    const [token = { accessToken: "", refreshToken: "" }, setToken] = useToken();
    const router = useRouter();

    useEffect(() => {
        if (!token) {                   // TODO write normal session check. This is very very ease to bypass.
            router.push('/login');
        }
    }, [token, router])

    const handlerTest: FormEventHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${apiconfig.url}/auth/test`, {
                method: "GET",
                headers: {
                    "Content-Type": "text/html; charset=utf-8",

                    "Authorization": `${token.accessToken}`,
                },


            });
            const data = await response.json();

            if (data) {
                console.log(data);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
            }
        }
    }

    return (
        <button onClick={handlerTest}>Test</button>
    )
}



export default TestPage;
