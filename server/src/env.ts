// require("dotenv").config({ path: ".env" });

export const env = {
  app: {
    port: Number(process.env.PORT) || 3000,
    apiPrefix: process.env.API_PREFIX || "/api",
  },
};
