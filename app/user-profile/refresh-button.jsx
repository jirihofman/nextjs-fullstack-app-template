'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from 'react-bootstrap';

export default function RefreshButton() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            className='m-2'
            disabled={isPending}
            onClick={() => {
                startTransition(() => {
                    router.refresh();
                });
            }}
            title='Client component again, duh!'
        >
            {isPending ? 'Refreshing...' : 'Refresh'}
        </Button>
		
    );
}
