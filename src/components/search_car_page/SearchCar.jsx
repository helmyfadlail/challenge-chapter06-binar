import React from "react";
// import bootstrap components
import { Col, Form, Row, Stack } from "react-bootstrap";

// import type button from custom button
import { TypeButton } from "../custom_button/Button";

const SearchCar = ({ handleSubmit }) => {
  const [inputDate, setInputDate] = React.useState("");
  const [inputTime, setInputTime] = React.useState("");
  const [inputCapacity, setInputCapacity] = React.useState("");

  return (
    <>
      <Stack className="position-relative form-container">
        <Form className="form" onSubmit={(e) => handleSubmit(e, inputDate, inputTime, inputCapacity)}>
          <Row className="px-4 py-3">
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Tipe Driver</Form.Label>
              <Form.Select aria-label="Default select example" placeholder="Pilih Tipe Driver">
                <option>Pilih Tipe Driver</option>
                <option value="Dengan sopir">Dengan Sopir</option>
                <option value="Tanpa sopir">Tanpa Sopir(Lepas Kunci)</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Pilih Tanggal</Form.Label>
              {/* <Field className="form-control" type="date" component="input" placeholder="Pilih Tanggal" /> */}
              <Form.Control type="date" placeholder="Pilih Tanggal" value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Waktu Jemput/Ambil</Form.Label>
              {/* <Field className="form-control" type="time" component="input" placeholder="Pilih Waktu" /> */}
              <Form.Control type="time" placeholder="Pilih Waktu" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg">
              <Form.Label>Jumlah Penumpang (optional)</Form.Label>
              {/* <Field className="form-control" type="number" component="input" placeholder="Jumlah Penumpang" /> */}
              <Form.Control type="number" placeholder="Jumlah Penumpang" value={inputCapacity} onChange={(e) => setInputCapacity(e.target.value)} />
            </Form.Group>
            <Col md="auto" className="d-flex align-items-end mb-3">
              <TypeButton>Cari Mobil</TypeButton>
            </Col>
          </Row>
        </Form>
      </Stack>
    </>
  );
};

export default SearchCar;
