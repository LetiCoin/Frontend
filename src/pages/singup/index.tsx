import useToken from '@/utils/Token/token';
import { SingupLayout } from '@/components/SingupLayout/SingupLayout';


const LoginPage = () => {
    const [token, setToken] = useToken();

    return (
        <SingupLayout setToken={setToken}></SingupLayout>
    )
}

export default LoginPage