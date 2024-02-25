import { Container } from "react-bootstrap"
import NavTopBar from "../../components/NavTopBar"

export default function Dashboard() {
    return (
        <>
            <NavTopBar />
            <Container>
                <div>
                    <h1>Dashboard Page</h1>
                </div>
            </Container>
        </>
    )
}