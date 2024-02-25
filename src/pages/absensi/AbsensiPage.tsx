import { Button, Card, Container, Form } from "react-bootstrap";
import NavTopBar from "../../components/NavTopBar";
import LiveDateTime from "../../components/LiveDateTimeClock";

export default function AbsensiPage() {

    return (
        <>
            <NavTopBar />
            <Container>
                <div style={{marginTop: '50px'}} className="row h-100 justify-content-center align-items-center">
                    <Form className="col-6">
                        <Card className="text-center">
                            <LiveDateTime />
                            <Card.Footer>
                                <Button className="col-4 text-center" variant="primary">Absen</Button>
                            </Card.Footer>
                        </Card>
                    </Form>
                </div>
            </Container>
        </>
    )
}