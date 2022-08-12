import React, { useState } from "react";
import {
  Button,
  ListGroup,
  Dropdown,
  Image,
  Row,
  Col,
  Carousel,
  Container,
  Form,
  Modal,
  Breadcrumb
} from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <br/>
      <Container style={{backgroundColor: "black", marginTop: "-10px"}} fluid>
      <Row>
          <Col style={{marginLeft: "-12px"}}>
            <Dropdown>
              <Dropdown.Toggle size="sm">Pilih Bahasa</Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col style={{marginLeft: "1010px",}}>
              <Image
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                style={{ width: "35px" , marginBottom: "6px"}}
                rounded
              />         
            <br />
            <Row style={{marginBottom: "-9px"}}>
              <Col>
                <p style={{ color: "white", fontSize: "10px" }}>Alan Saputra</p>
              </Col>
            </Row>
            </Col>
        </Row>
      </Container>
      <Breadcrumb style={{marginLeft: "850px"}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Berita</Breadcrumb.Item>
        <Breadcrumb.Item active>Bola</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Container style={{ width: "700px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              alt="sanirizki"
            />
            <Carousel.Caption>
              <h3>
                Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23
                Tetap Bagus
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="neymar"
            />
            <Carousel.Caption>
              <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="timnasinggris"
            />
            <Carousel.Caption>
              <h3>Inggris Mau Jadi Tim Terbaik Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
      <Row>
        <Col md="3">
          <ListGroup>
            <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item disable>Divisi Primera</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <div className="container-fluid bg-light text-dark p-2">
            <div className="container bg-light p-5">
              <h1 className="display-6 fw-bold">DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button>Read More</Button>
            </div>
          </div>
        </Col>
        <Col>
          <Form>
            <Row>
              <Col md={{ span: 3, offset: 5 }}>
                <Image
                  src="https://icon-library.com/images/username-icon/username-icon-24.jpg"
                  style={{ width: "70px" }}
                  rounded
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center" }}>Silahkan Login</h3>
              </Col>
            </Row>

            <Form.Group>
              <Form.Control type="email" placeholder="Masukan Email" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br />
            <Form.Check type="checkbox" label="Term & Condition" />
            <br />
            <Button onClick={handleShow}>Login</Button>
            <br />
          </Form>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Anda Berhasil Login
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Username & Password</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
