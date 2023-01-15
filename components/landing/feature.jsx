import { Button, Container } from 'react-bootstrap';
import { BookHalf } from 'react-bootstrap-icons';
import Link from 'next/link';
import Image from 'next/image';

const Feature = () => {
    const w = '40px';
    const features = [
        {
            buttons: [
                <Link key={1} passHref href="https://nextjs.org/"><Button className='m-1' variant="primary"><BookHalf className='bi' /> Nextjs</Button></Link>,
            ],
            desc: 'Nextjs framework.',
            img: <Image alt='' height={w} width={w} src='https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67' />,
            title: 'Nextjs 12.3',
        }, {
            buttons: [
                <Link key={1} passHref href="https://react-bootstrap.github.io/"><Button className='m-1' variant="primary"><BookHalf className='bi' /> React Bootstrap</Button></Link>,
            ],
            desc: 'Bootstrap 5.',
            img: <Image alt='' height={w} width={w} src='https://raw.githubusercontent.com/react-bootstrap/react-bootstrap/7c66098610ea7aea89edfe38988990ba8abcd31d/www/static/logo.svg' />,
            title: 'React Bootstrap',
        }, {
            buttons: [],
            desc: 'With example initial Knex migration.',
            img: <Image alt='' height={w} width={w} src='https://cdn-icons-png.flaticon.com/512/5968/5968313.png' />,
            title: 'MySQL 8.0 with Knex',
        }, {
            buttons: [
                <Link passHref key={2} href={'https://www.cypress.io/'}><Button className='m-1' variant="primary" ><BookHalf className='bi' /> Cypress</Button></Link>,
                <Link passHref key={1} href={'https://jestjs.io/'}><Button className='m-1' variant="primary" ><BookHalf className='bi' /> Jest</Button></Link>,
            ],
            desc: 'Unit, API and E2E tests with Jest and Cypress.',
            img: <Image alt='' height={w} width={w} src='https://avatars.githubusercontent.com/u/8908513?s=280&v=4' />,
            title: 'Cypress and Jest tests',
        }, {
            buttons: [],
            desc: 'Default GitHub Actions running all your Jest and Cypress tests.',
            img: <Image alt='' height={w} width={w} src='https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg' />,
            title: 'GitHub Actions',
        }, {
            buttons: [
                <Link key={1} passHref href="https://next-auth.js.org/"><Button className='m-1' variant="primary"><BookHalf className='bi' /> NextAuth.js</Button></Link>,
            ],
            desc: 'Using MySQL database to store users and sessions. Simply click the Sign in button.',
            img: <Image alt='' height={w} width={w} src='https://next-auth.js.org/img/logo/logo-sm.png' />,
            title: 'NextAuth authentication',
        },
    ];
    return (
        <Container className='px-4 py-5'>
            <h2 className="pb-2 border-bottom" id='features'>Features</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {
                    features.map((feature, key) => <div key={key} className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            {feature.img}
                        </div>
                        <div>
                            <h2>{feature.title}</h2>
                            <p>{feature.desc}</p>
                            {feature.buttons}
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default Feature;
