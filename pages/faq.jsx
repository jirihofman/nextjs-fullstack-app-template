import pjson from '../package.json';
import { Container } from 'react-bootstrap';
import Main from '../components/layout/main';
import PropTypes from 'prop-types';
export default function Faq({ data }) {

    return (
        <Main title={'FAQ'}>
            <Container>
                <h1>FAQ</h1>
                {data.map((q, i) =>
                    <div className='col-10 float-left clearfix mb-3 mb-md-2' key={i}>
                        <h2>
                            <span className='f4 lh-big faq-q'>{`${i + 1}. ${q.question}`}</span>
                        </h2>
                        <div className='col-10 mt-3'>
                            <div className='ms-4 d-flex flex-wrap faq-a'>
                                {q.answer}
                            </div>
                        </div>
                    </div>
                )
                }</Container>
        </Main>
    );
}

Faq.propTypes = {
    data: PropTypes.array.isRequired,
};

export async function getStaticProps() {

    return {
        props: {
            data: [
                {
                    answer: pjson.description,
                    question: `What is ${pjson.displayName}?`,
                },
                {
                    answer: 'Yes.',
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
            ]
        }
    };
}
