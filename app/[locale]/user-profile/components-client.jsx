'use client';

import { useState } from 'react';
import { UserProfile, useSession } from '@clerk/nextjs';
import { Button } from 'react-bootstrap';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

export default function UserProfilePage({ children }) {

    const { isLoaded } = useSession();
    const [isPending, setIsPending] = useState();

    return (
        <div className='border rounded-3 p-2'>
            <h2>Client component</h2>
            <Button variant="primary" onClick={async () => {
                setIsPending(true);
                try {
                    // Hacky stuff to not call stuff like `/en/api/click`
                    const res = await fetch(window.location.origin + '/api/click', { method: 'POST' });
                    if (res.ok) {
                        Notify.success('Success');
                    } else {
                        Notify.failure([res.status, res.statusText].join(' '));
                    }
                } catch (error) {
                    console.error(error);
                    Notify.failure(error.message);
                }
                setIsPending(false);
            }}
            disabled={!isLoaded || isPending}
            className='m-2'>{isPending ? 'Refreshing...' : 'Click me'}</Button>

            <p>And I will increase counter for this user in Postgre DB.</p>
            <hr />
            {children}
            <h2 className='mt-3'>Clerk section</h2>
            <UserProfile routing="path" path={'/user-profile'} />
        </div>
    );
}

UserProfilePage.propTypes = {
    children: PropTypes.array
};
