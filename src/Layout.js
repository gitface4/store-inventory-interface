import {Container, Row, Col} from "react-bootstrap";
import SideMenu from "./components/SideMenu";

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col xs={1} className="ps-0">
                    <SideMenu />
                </Col>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}
