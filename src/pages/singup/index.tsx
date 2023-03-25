import useToken from '@/api/Token/token';
import { SingupLayout } from '@/components/SingupLayout/LoginLayout';


const LoginPage = () => {
    const [token, setToken] = useToken();

    return (
        <SingupLayout setToken={setToken}></SingupLayout>
    )
}

export default LoginPage