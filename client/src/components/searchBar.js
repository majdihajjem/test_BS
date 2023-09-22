import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <Container>
      <Row style={{width:"100%", justifyContent:"center"}}>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
            <BsSearch/>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}