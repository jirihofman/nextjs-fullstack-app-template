import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function AccessDenied() {
    return (
        <div style={{ borderLeft: '2px solid red', padding: '10px 30px' }}>
            <h1>Access Denied</h1>
            <p>
                <Link href="/api/auth/signin"
                    onClick={(e) => {
                        e.preventDefault();
                        signIn();
                    }}>You must be signed in to view this page</Link>
            </p>
        </div>
    );
}
