import { loadEnvConfig } from '@next/env';
const dev = process.env.NODE_ENV !== 'production';
const { MYSQL_URI } = loadEnvConfig('./', dev).combinedEnv;

// eslint-disable-next-line no-console
console.log('🐉  knexfile.js. MYSQL_URI: %s. NODE_ENV: %s', MYSQL_URI, process.env.NODE_ENV);

const config = {
    client: 'mysql',
    connection: MYSQL_URI,
    dev,
    migrations: {
        directory: './knex/migrations',
    },
    pool: {
        // acquire promises are rejected after this many milliseconds
        // if a resource cannot be acquired
        acquireTimeoutMillis: parseInt(process.env.GBC_DB_POOL_ACQUIRE_TIMEOUT_MILLIS || 15000, 10),
        // how long to idle after failed create before trying again
        createRetryIntervalMillis: parseInt(process.env.GBC_DB_POOL_CREATE_RETRY_INTERVAL_MILLIS || 200, 10),
        // create operations are cancelled after this many milliseconds
        // if a resource cannot be acquired
        createTimeoutMillis: parseInt(process.env.GBC_DB_POOL_CREATE_TIMEOUT_MILLIS || 30000, 10),
        // destroy operations are awaited for at most this many milliseconds
        // new resources will be created after this timeout
        destroyTimeoutMillis: parseInt(process.env.GBC_DB_POOL_DESTROY_TIMEOUT_MILLIS || 5000, 10),
        // free resouces are destroyed after this many milliseconds
        idleTimeoutMillis: parseInt(process.env.GBC_DB_POOL_IDLE_TIMEOUT_MILLIS || 30000, 10),
        // maximum size
        max: parseInt(process.env.GBC_DB_POOL_MAX || 10, 10),
        // minimum size
        min: parseInt(process.env.GBC_DB_POOL_MIN || 2, 10),
        // If true, when a create fails, the first pending acquire is
        // rejected with the error. If this is false (the default) then
        // create is retried until acquireTimeoutMillis milliseconds has
        // passed.
        propagateCreateError: process.env.GBC_DB_POOL_PROPAGATE_CREATE_ERROR === 'true',

        // how often to check for idle resources to destroy
        reapIntervalMillis: parseInt(process.env.GBC_DB_POOL_REAP_INTERVAL_MILLIS || 1000, 10),
    },
    seeds: {
        directory: './knex/seeds',
    },
};
export default config;
/** Named exports: or knex won't find them */
export const { client, connection, useNullAsDefault } = config;
