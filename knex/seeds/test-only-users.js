/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    const TOMOROW = new Date().getTime() + 1000 * 60 * 60 * 24;
    const seedName = module.filename.split('/').find(s => s.endsWith('js'));
    if (process.env.NODE_ENV === 'production') {
        console.log('🌱 🚫 Not running test seed while in production:', seedName);
        return;
    }
    console.log('🌱 👌 Running test seed:', process.env.NODE_ENV, seedName);
    console.log('🌱 👨‍💻 🤷‍♀️ Test users and sessions');
    const testUsers = [
        { id: 'test-user-alisun', name: 'Alisun Leacock', email: 'alisun.leacock@gmail.com' },
        { id: 'test-user-beatrice', image: 'https://avatars.githubusercontent.com/u/583231?v=4', name: 'Beatrice Hardy', email: 'beatrice.hardy@hotmail.com' },
    ];
    await knex('sessions').where('userId', 'like', 'test-user-%').del();
    await knex('users').where('id', 'like', 'test-user-%').del();
    
    await knex('users').insert(testUsers);
    await knex('sessions').insert(testUsers.map(u => ({ id: u.id, sessionToken: u.id + '-session-token', userId: u.id, expires: TOMOROW })));
};
