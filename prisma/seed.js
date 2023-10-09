/* eslint-disable sort-keys */
import prisma from '../lib/prisma';

async function main() {
    const response = await Promise.all([
        await prisma.user_clicks.upsert({
            where: { email: 'rauchg@vercel.com' },
            update: {},
            create: {
                name: 'Guillermo Rauch',
                email: 'rauchg@vercel.com',
                image:
					'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
            },
        }),
    ]);
    // eslint-disable-next-line no-console
    console.log(response);
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
