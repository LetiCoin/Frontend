const url = "http://93.92.200.119:9010";
// const url = "localhost:3000";
const apiconfig = {
    url: url,
    paths: {
        login: `${url}/auth/register`,
    },
};

export const paths = apiconfig.paths;
module.exports = apiconfig;
