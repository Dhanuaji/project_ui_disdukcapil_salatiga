import { Button, Card, Col, Container, Form } from "react-bootstrap";
import NavTopBar from "../../components/NavTopBar";

export default function ProfilePage() {
    return(
        <>
            <NavTopBar />
            <Container>
                <br/>
                <div>
                    <h5>User Profile</h5>
                </div>
                <Form className="row h-100 justify-content-center align-items-center">
                    <Col>
                    <Card className="col-12">
                        <Card.Body>
                            <Form.Group>
                                <Form.Label>Username :</Form.Label>
                                <Form.Control type="text" disabled>
                                </Form.Control>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Nama Lengkap :</Form.Label>
                                <Form.Control type="text" disabled>
                                </Form.Control>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>NIK :</Form.Label>
                                <Form.Control type="text" disabled>
                                </Form.Control>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Alamat :</Form.Label>
                                <Form.Control type="text">
                                </Form.Control>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>No. Handphone :</Form.Label>
                                <Form.Control type="text">
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="success">Simpan</Button>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col className="">
                        <div className="text-center">
                            <Button variant="primary">Ganti Password</Button>
                        </div>
                    </Col>
                </Form>
            </Container>
        </>
    )
}