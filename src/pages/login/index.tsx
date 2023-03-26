import useToken from '@/utils/Token/token';
import { LoginLayout } from '@/components/LoginLayout/LoginLayout';

const LoginPage = () => {
    const [token, setToken] = useToken();

    return (
        <LoginLayout setToken={setToken}></LoginLayout>
    )
}

export default LoginPage