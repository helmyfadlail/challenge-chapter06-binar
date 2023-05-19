import React from "react";
// import bootstrap components
import { Col, Container, Form, Row } from "react-bootstrap";

// import type button from custom button
import { TypeButton } from "../custom_button/Button";

const SearchCar = ({ handleSubmit }) => {
  const [inputDriverType, setInputDrivertype] = React.useState("");
  const [inputDate, setInputDate] = React.useState("");
  const [inputTime, setInputTime] = React.useState("");
  const [inputCapacity, setInputCapacity] = React.useState("");

  return (
    <>
      <Container className="position-relative form-container">
        <Form className="form" onSubmit={(e) => handleSubmit(e, inputDriverType, inputDate, inputTime, inputCapacity)}>
          <Row className="px-4 py-3">
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Tipe Driver</Form.Label>
              <Form.Select aria-label="Default select example" placeholder="Pilih Tipe Driver" onChange={(e) => setInputDrivertype(e.target.value)}>
                <option>Pilih Tipe Driver</option>
                <option value="Dengan sopir">Dengan Sopir</option>
                <option value="Tanpa sopir">Tanpa Sopir(Lepas Kunci)</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Pilih Tanggal</Form.Label>
              <Form.Control type="date" placeholder="Pilih Tanggal" onChange={(e) => setInputDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Waktu Jemput/Ambil</Form.Label>
              <Form.Control type="time" placeholder="Pilih Waktu" onChange={(e) => setInputTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Jumlah Penumpang (optional)</Form.Label>
              <Form.Control type="number" placeholder="Jumlah Penumpang" onChange={(e) => setInputCapacity(e.target.value)} />
            </Form.Group>
            <Col md="auto" className="d-flex align-items-end mb-3">
              <TypeButton>Cari Mobil</TypeButton>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SearchCar;
