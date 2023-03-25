import Singup from '@/components/Singup/Singup';
import Layout from '@/components/Layout/Layout';
import { ISetToken } from '@/api/Token/token';

interface Props {
    setToken: ISetToken;
}
export const SingupLayout = ({ setToken }: Props) => (
    <Layout>
        <Singup setToken={setToken} />
    </Layout>
);
