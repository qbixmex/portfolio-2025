declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH0_PASSWORD: string;
      MAILER_SERVICE: string;
      MAILER_EMAIL: string;
      MAILER_TO: string;
      MAILER_SECRET_KEY: string;
    }
  }
}

export {};