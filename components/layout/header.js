import pjson from '../../package.json';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Container, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {

    const { data: session, status } = useSession();
    const loading = status === 'loading';

    const handleSignInClick = (evt) => {
        evt.preventDefault();
        signIn();
    };

    return (
        <header>
            <noscript>
                <style>{'.nojs-show { opacity: 1; top: 0; }'}</style>
            </noscript>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Brand href="/">{pjson.displayName}</Navbar.Brand>

                    {/* Display Sign-in for iPhones. Empty space when signed in. */}
                    <Nav className='d-inline d-sm-none' style={{ minWidth: '50px' }}>
                        {session ? session.user.image && <span style={{ backgroundImage: `url('${session.user.image}')`, marginTop: '-5px' }} className={styles.avatar} />
                            : <Nav.Link disabled={loading} onClick={handleSignInClick}>Sign in</Nav.Link>}
                    </Nav>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='me-auto'>
                            <Link passHref href="#"><Nav.Link onClick={() => { alert('I do nothing!'); }}>Menu item</Nav.Link></Link>
                            <Link passHref href="https://github.com/jirihofman/nextjs-fullstack-app-template"><Nav.Link>GitHub</Nav.Link></Link>

                            <NavDropdown title={'Site'}>
                                <Link passHref href="/faq"><NavDropdown.Item>FAQ</NavDropdown.Item></Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item role='button' data-bs-toggle='modal' data-bs-target='#exampleModal'>About</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {session ? <NavDropdown align={'end'} title={session.user.image && <span style={{ backgroundImage: `url('${session.user.image}')`, marginTop: '-5px' }} className={styles.avatar} />}>
                                <Link passHref href="/user/profile"><NavDropdown.Item>Your profile</NavDropdown.Item></Link>
                                <NavDropdown.Divider />
                                <Link passHref href="/api/auth/signout"><NavDropdown.Item onClick={(e) => { e.preventDefault(); signOut(); }}>Sign out</NavDropdown.Item></Link>
                            </NavDropdown>
                                /* Display Sign-in for iPads and larger */
                                : <Link passHref href="/api/auth/signin"><Nav.Link className='d-none d-sm-inline' disabled={loading} onClick={handleSignInClick}>Sign in</Nav.Link></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="modal fade" id="exampleModal" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Modal.Dialog className="modal-dialog">
                    <div className="modal-content">
                        <Modal.Header>
                            <h5 className="modal-title" id="exampleModalLabel">About <b>{pjson.displayName}</b></h5>
                        </Modal.Header>
                        <div className="modal-body">
                            <p>
                                This template, <b>{pjson.displayName}</b>, lets you quickly setup fullstack react app:
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Version</th>
                                        <td>{pjson.version}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Dialog>
            </div>
        </header>
    );
}
