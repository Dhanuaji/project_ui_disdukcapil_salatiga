import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavTopBar() {
    return (
        <>
            <Navbar className="bg-light" variant="light">
                <Container>
                    <Navbar.Brand href="/dashboard">Dinas Kependudukan dan Pencatatan Sipil Salatiga</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/absensi">Absensi</Nav.Link>
                        <Nav.Link href="/daftar-absensi">Daftar Absensi</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Danu Pratama">
                        <NavDropdown.Item>
                            <Link to='/profile-user'>Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to='/'>logout</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}