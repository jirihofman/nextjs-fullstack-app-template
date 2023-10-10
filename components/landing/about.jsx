import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section className="section" id="about">
            <div className='container'>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-warning">About Us</h3>
                            <p className="text-muted">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2 className="font-weight-light line-height-1_6 mb-4">Lorem Ipsum has been the industry&apos;s standard dummy text</h2>
                    </Col>
                    <Col md={{ offset: 1, size: 7 }}>
                        <Row>
                            <Col md={6}>
                                <h6 className="font-weight-light f-20 mb-3">Our Mission</h6>
                                <p className="text-muted font-weight-light">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Col>
                            <Col md={6}>
                                <h6 className="font-weight-light f-20 mb-3">Our Vision</h6>
                                <p className="text-muted font-weight-light">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    );
};
export default About;
