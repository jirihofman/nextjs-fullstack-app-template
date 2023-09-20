import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import prisma from '../../../lib/prisma';

export async function POST(req, res) {

    const { userId } = getAuth(req);
    if (!userId) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    const clicks = await prisma.user_clicks.count();

    await prisma.user_clicks.create({ data: { userId }});

    return NextResponse.json({ clicks });
}
