import Login from '@/components/Login/Login'
import css from './LoginPage.module.css'
import Layout from '@/components/Layout/Layout'

const LoginPage = () => {
    return (
        <Layout>

            <div className={css.wrapper}>

                <Login />
            </div>
        </Layout>
    )
}

export default LoginPage