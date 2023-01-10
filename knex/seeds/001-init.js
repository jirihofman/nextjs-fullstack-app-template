/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('knex_migrations').select();
    console.error('Inital Knex migration OK');
};
