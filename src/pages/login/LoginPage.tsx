import { Button, Card, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <>
            <div className="container h-100" style={{marginTop: "100px"}}>
            <div className="row h-100 justify-content-center align-items-center">
                <Form className="col-6">
                    <Card>
                        <Card.Header className="text-center">
                            <strong>Login</strong>
                        </Card.Header>
                        <Card.Body>
                            <br/>
                            <Form.Group>
                                <Form.Control type="text" placeholder="username"></Form.Control>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Control type="password" placeholder="password"></Form.Control>
                            </Form.Group>
                            <br/>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="success">
                                <Link to='/dashboard' style={{textDecoration: 'none', color: 'white'}}>Login</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </div>
            </div>
        </>
    )
}