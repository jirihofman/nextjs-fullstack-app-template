import NextAuth from 'next-auth';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';
// import AppleProvider from 'next-auth/providers/apple';
// import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import pjson from '../../../package.json';
// import GoogleProvider from 'next-auth/providers/google';
// import { getKnex } from '../../../knex';
// require('dotenv').config();

export default NextAuth({
    adapter: TypeORMLegacyAdapter(process.env.MYSQL_URI),
    callbacks: {
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     return token;
        // },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl;
        // },
        async session({ session, user }) {
        // async session({ session, user, token }) {
            session.user.userId = user.id;
            // const knex = getKnex();
            if (pjson.author.email === session.user.email) {
                session.user.isAdmin = true;
            }
            return session;
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true;
        // },
    },
    debug: process.env.NODE_ENV === 'development',
    providers: [
        // OAuth authentication providers...
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        GithubProvider({
            authorization: 'https://github.com/login/oauth/authorize?scope=user:email', // Trying with no read:user. Seems OK.
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    site: process.env.NEXTAUTH_URL || 'http://localhost:4100',
});
