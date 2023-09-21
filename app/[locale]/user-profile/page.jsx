import ClientComp from './components-client';
import ServerComp from './components-server';

export default function HomeUp() {

    return (
        <div>
            <h1>App router page (server) /app/user-profile</h1>
            <p>
                This section is to demonstrate writing to a DB from a server component. And composition of server and client components.
            </p>
            <ClientComp>
                <div className='border rounded-3 p-2'>
                    <h2>Server comp inside client comp</h2>
                    <ServerComp />
                </div>
            </ClientComp>
        </div>
    );
}
