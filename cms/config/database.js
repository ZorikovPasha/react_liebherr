module.exports = ({ env }) => {
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: "sqlite",
          filename: env('DATABASE_FILENAME', '../temp/data.db'),
          // host: env('DATABASE_HOST'),
          // port: env.int('DATABASE_PORT'),
          // database: env('DATABASE_NAME'),
          // username: env('DATABASE_USERNAME'),
          // password: env('DATABASE_PASSWORD'),
          // schema: env('DATABASE_SCHEMA', 'public'), // Not Required
          // ssl: false,
  
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
}
