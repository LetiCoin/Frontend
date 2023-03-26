import Layout from '@/components/Layout/Layout';
import { ISetToken } from '@/utils/Token/token';
import Login from '@/components/Login/Login';
interface Props {
    setToken: ISetToken;
}
export const LoginLayout = ({ setToken }: Props) => (
    <Layout>
        <Login setToken={setToken} />
    </Layout>
);
