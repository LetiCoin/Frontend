const url = "http://localhost:3000";
const apiconfig = {
    url: url,
    paths: {
        login: `${url}/auth/register`,
    },
};

export const paths = apiconfig.paths;
module.exports = apiconfig;
