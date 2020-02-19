export const config: any = {
  port: process.env.PORT || 3000,
  maxBodySize: process.env.MAX_BODY_SIZE || '16mb',
  jwt: {
    secret: process.env.JWT_SECRET,
    expireTime: process.env.JWT_EXPIRETIME || 240,
  },
  cronTime: process.env.CRON_TIME || '*/15 * * * *',
  actionsServer: process.env.ACTIONS_SERVER,
  actionsServerKey: process.env.ACTIONS_SERVER_KEY,
};

if (process.env.MONGO) {
  config.mongodb = {
    connectionString: process.env.MONGO,
    database: process.env.DEFAULT_DATABASE || process.env.MONGO_DATABASE || 'formio',
  };
}