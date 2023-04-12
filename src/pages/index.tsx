import Layout from '@/components/Layout/Layout';
import css from './Home.module.css';
import useToken from '@/utils/Token/token';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



function HomePage() {

    const [token, setToken] = useToken();
    const router = useRouter();

    useEffect(() => {
        if (!token) {                   // TODO write normal session check. This is very very ease to bypass.
            router.push('/login');
        }
    }, [token, router])

    return (
        <Layout>
            <div className={css.wrapper}>
                <header className={css.header}>
                    <h1 className={css.logo}>LetiCoin</h1>
                    <p className={css.subtext}>Coming Soon...</p>
                </header>
            </div>
        </Layout>
    );
}



export default HomePage;
