module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccvhg7mn6mptafh4k0ng-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ecommerce_7j2s'),
      user: env('DATABASE_USERNAME', 'ecommerce'),
      password: env('DATABASE_PASSWORD', 'KAB1PARXK1FsUvQwf0yo7IDLscIPGxWr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
