const url = "http://localhost:3000";
const apiconfig = {
    url: url,
    paths: {
        register: `${url}/auth/register`,
        login: `${url}/auth/login`,
    },
};

export const paths = apiconfig.paths;
export default apiconfig;
