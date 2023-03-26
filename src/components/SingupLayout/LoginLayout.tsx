import Singup from '@/components/Singup/Singup';
import Layout from '@/components/Layout/Layout';
import { ISetToken } from '@/utils/Token/token';

interface Props {
    setToken: ISetToken;
}
export const SingupLayout = ({ setToken }: Props) => (
    <Layout>
        <Singup setToken={setToken} />
    </Layout>
);
