// import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../../components/layout/main';
import AccessDenied from '../../components/access-denied';
import { Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { InfoSquare } from 'react-bootstrap-icons';
import ReactProfile from '@jirihofman/react-profile';

export default function Profile() {
    const { data: session, status } = useSession();
    const isSessionLoading = status === 'loading';

    // If no session exists, display access denied message
    if (status === 'unauthenticated') {
        return <Layout title={'Access Denied'}><AccessDenied /></Layout>;
    }

    // If session exists, display content
    return (
        <Layout title={'Profile'}>
            <Container>
                <Row xs={1} md={2} className='g-2'>
                    <Col>
                        <Card className='sml-card'>
                            <Card.Header>User profile <InfoSquare role={'button'} className='float-end' data-bs-toggle='modal' data-bs-target='#userDetails' /></Card.Header>
                            <Card.Body>
                                <ReactProfile
                                    email={session?.user.email}
                                    image={session?.user.image}
                                    name={session?.user.name}
                                    isLoading={isSessionLoading} />
                                <div className="modal fade" id='userDetails' tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <Modal.Dialog className="modal-dialog">
                                        <div className="modal-content">
                                            <Modal.Header>
                                                <h5 className="modal-title" id="exampleModalLabel">User details - session</h5>
                                            </Modal.Header>
                                            <div className="modal-body">
                                                {isSessionLoading && <Spinner animation="border" />}
                                                <pre>{JSON.stringify(session, null, 2)}</pre>
                                            </div>
                                        </div>
                                    </Modal.Dialog>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
