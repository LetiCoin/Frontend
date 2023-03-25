import Layout from '@/components/Layout/Layout';
import { SingupLayout } from '@/components/SingupLayout/LoginLayout';
import css from './Home.module.css';
import useToken from '@/api/Token/token';



function HomePage() {

    const [token, setToken] = useToken();
    if (!token) {
        return <SingupLayout setToken={setToken} />;
    }
    return (
        <Layout>
            <div className={css.wrapper}>
                <header className={css.header}>
                    <h1 className={css.logo}>LetiCoin</h1>
                    <p className={css.subtext}>Comming Soon...</p>
                </header>
            </div>
        </Layout>
    );
}



export default HomePage;
