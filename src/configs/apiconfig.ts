const apiconfig = {
    url: process.env.NEXT_PUBLIC_BASE_API_DOMAIN || "",
    paths: {
        login: process.env.NEXT_PUBLIC_LOGIN_API_URL || "",
        register: process.env.NEXT_PUBLIC_REGISTER_API_URL || "",
    },
};

export const paths = apiconfig.paths;
export default apiconfig;
