import { Button, Container } from 'react-bootstrap';
import { BookHalf, /* PersonFill, */ Plus } from 'react-bootstrap-icons';
import Link from 'next/link';

const Feature = () => {
    const features = [
        {
            buttons: [
                <Link key={1} passHref href="https://nextjs.org/"><Button className='m-1' variant="primary"><BookHalf className='bi' /> Nextjs</Button></Link>,
            ],
            desc: 'React, Bootstrap, Nextjs',
            id: 1,
            img: <span>🚀</span>,
            title: 'Nextjs 12.3',
        }, {
            buttons: [],
            desc: 'With initial Knex migration',
            id: 1,
            img: <span>💾</span>,
            title: 'MySQL 8.0 with Knex',
        }, {
            buttons: [
                <Link passHref key={1} href={'https://jestjs.io/'}><Button className='m-1' variant="primary" ><Plus className='bi' /> Jest</Button></Link>,
                <Link passHref key={1} href={'https://www.cypress.io/'}><Button className='m-1' variant="primary" ><Plus className='bi' /> Cypress</Button></Link>,
            ],
            desc: 'Unit, API and E2E tests with Jest and Cypress',
            id: 2,
            img: <span>🧪</span>,
            title: 'Cypress and Jest tests',
        }, {
            buttons: [],
            desc: 'Default GitHub Actions running all your Jest and Cypress tests.',
            id: 3,
            img: <span>⚙</span>,
            title: 'GitHub Actions',
        // }, {
        //     buttons: [],
        //     desc: 'Default GitHub Actions running all your Jest and Cypress tests.',
        //     id: 3,
        //     img: <span>🫃</span>,
        //     title: 'Authentication',
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
