import pjson from '../../package.json';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Container, Modal, Nav, NavDropdown, Navbar, Button, Spinner, ProgressBar } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {

    const { t, lang } = useTranslation();
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
                            : loading ? <Spinner animation='border' variant='secondary' /> : <Nav.Link onClick={handleSignInClick}>{t('common:header.signin')}</Nav.Link>}
                    </Nav>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='me-auto'>
                            <Link
                                passHref
                                href="https://github.com/jirihofman/nextjs-fullstack-app-template"
                                legacyBehavior><Nav.Link>GitHub</Nav.Link></Link>

                            <NavDropdown title={'Site'}>
                                <Link passHref href="/faq" legacyBehavior><NavDropdown.Item>FAQ</NavDropdown.Item></Link>
                                <NavDropdown.Divider />
                                <Link href="/" locale="cs" legacyBehavior><Button variant='outline-secondary' size='sm' active={lang === 'cs'} className='me-2 ms-2'>🇨🇿</Button></Link>
                                <Link href="/" locale="en" legacyBehavior><Button variant='outline-secondary' size='sm' active={lang === 'en'} className='me-2'>🇬🇧</Button></Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item role='button' data-bs-toggle='modal' data-bs-target='#exampleModal'>{t('common:header.about')}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {session ? <NavDropdown align={'end'} title={session.user.image && <span style={{ backgroundImage: `url('${session.user.image}')`, marginTop: '-5px' }} className={styles.avatar} />}>
                                <Link passHref href="/user/profile" legacyBehavior><NavDropdown.Item>{t('common:header.profile')}</NavDropdown.Item></Link>
                                <NavDropdown.Divider />
                                <Link passHref href="/api/auth/signout" legacyBehavior><NavDropdown.Item onClick={(e) => { e.preventDefault(); signOut(); }}>{t('common:header.signout')}</NavDropdown.Item></Link>
                            </NavDropdown>
                                /* Display Sign-in for iPads and larger */
                                : loading ? <ProgressBar now={100} striped animated className='mx-auto' /> : <Link passHref href="/api/auth/signin" legacyBehavior><Nav.Link className='d-none d-sm-inline' disabled={loading} onClick={handleSignInClick}>{t('common:header.signin')}</Nav.Link></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="modal fade" id="exampleModal" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Modal.Dialog className="modal-dialog">
                    <div className="modal-content">
                        <Modal.Header>
                            <h5 className="modal-title" id="exampleModalLabel">{t('common:header.about')} <b>{pjson.displayName}</b></h5>
                        </Modal.Header>
                        <div className="modal-body">
                            <p>
                                {t('common:header.description', { displayName: pjson.displayName })}
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{t('common:version')}</th>
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
