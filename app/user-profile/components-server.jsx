import prisma from '../../lib/prisma';
import RefreshButton from './refresh-button';

export default async function Table() {
    const startTime = Date.now();
    const clicks = await prisma.user_clicks.count();
    const duration = Date.now() - startTime;

    return (
        <div className="border rounded-3 p-2">
            <h2>Click counter (server)</h2>
            <p className="text-sm text-gray-500">
                {clicks} clicks counted in {duration}ms.
            </p>
            <RefreshButton />
        </div>
    );
}
