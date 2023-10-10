import pjson from '../../../package.json';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
export default function Faq() {

    const data = [
        {
            answer: pjson.description,
            question: `What is ${pjson.displayName}?`,
        },
        {
            answer: 'Yes. We switched to Clerk for authentication. It\'s a lot easier to use and has a lot more features.',
            question: 'Wasn\'t there Next-auth?',
        },
        {
            answer: 'No. It used to when it was using Next-auth, but now it uses Clerk. The plan is to add a database for user data.',
            question: 'Does it create any database tables?',
        },
        {
            answer: 'It was the implementation with the smallest changes needed.',
            question: 'Why did you choose next-translate for i18n?',
        },
        {
            answer: 'Yes.',
            question: 'Will there be more FAQs?',
        },
        {
            answer: 'Maybe.',
            question: 'Soon?',
        },
    ];

    return <div className='container-xxl'>

        <h1>FAQ</h1>
        {data.map((q, i) => (
            <Row className='clearfix mb-3 mb-md-2' key={i}>
                <Col xs={10}>
                    <h2>
                        <span className='f4 lh-big faq-q'>{`${i + 1}. ${q.question}`}</span>
                    </h2>
                    <Col xs={10} className='mt-3'>
                        <div className='ms-4 d-flex flex-wrap faq-a'>
                            {q.answer}
                        </div>
                    </Col>
                </Col>
            </Row>
        ))}
    </div>;
}

Faq.propTypes = {
    data: PropTypes.array.isRequired,
};

export const metadata = {
    description: pjson.description,
    title: 'FAQ - ' + pjson.displayName,
};
