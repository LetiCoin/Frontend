const dotenv = require("dotenv"); // require dotenv
const cli = require("next/dist/cli/next-start");

// Used the same order
// as in next app https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order
// Maybe exist a more consistent way to connect the .env files
// TODO Find another way to use .env.$(NODE_ENV).local ect.
dotenv.config({ path: "process.env" });
dotenv.config({ path: ".env.production.local" });
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env.production" });
dotenv.config({ path: ".env" });


// Set default port and host for production environment
const FRONTEND_PROD_PORT = process.env.FRONTEND_PROD_PORT || 3000;
const FRONTEND_PROD_HOST = process.env.FRONTEND_PROD_HOST || "0.0.0.0";

// Log setup message
console.log("setup", FRONTEND_PROD_PORT);

// Start next application with given port and host
cli.nextStart(["-p", FRONTEND_PROD_PORT], ["-H", FRONTEND_PROD_HOST]);
