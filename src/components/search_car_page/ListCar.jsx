import { Alert, Card, Container } from "react-bootstrap";
import { TypeButton } from "../custom_button/Button";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineCalendar } from "react-icons/ai";

const ListCar = ({ items, showCars }) => {
  const formatRupiah = (number) => {
    return Intl.NumberFormat("id-ID", {
      currency: "IDR",
      style: "currency",
    }).format(number);
  };

  return (
    <>
      <Container className="pt-3 pb-5 m-auto">
        {showCars ? (
          <Container className="p-0 card-container">
            {items.length === 0 ? (
              <Alert className="fw-bold text-center" variant="danger">
                Cars not found
              </Alert>
            ) : (
              items.map((car, index) => {
                return (
                  <Card key={index} className="p-4">
                    <Card.Img variant="top" src={car.image} alt={car.manufacture} />
                    <Card.Body className="px-0 pt-3 pb-0">
                      <Card.Text className="fw-semibold mb-1">{`${car.manufacture} ${car.model} / ${car.type}`}</Card.Text>
                      <Card.Title className="fw-bold mb-1">{`${formatRupiah(car.rentPerDay)} / hari`}</Card.Title>
                      <Card.Text className="lh-sm small">{car.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 px-0 pb-3" style={{ backgroundColor: "#fff" }}>
                      <Card.Text className="mb-1">
                        <HiOutlineUsers style={{ fontSize: "20px" }} /> {car.capacity}
                      </Card.Text>
                      <Card.Text className="mb-1">
                        <AiOutlineSetting style={{ fontSize: "20px" }} /> {car.transmission}
                      </Card.Text>
                      <Card.Text className="mb-1">
                        <AiOutlineCalendar style={{ fontSize: "20px" }} /> Tahun {car.year}
                      </Card.Text>
                    </Card.Footer>
                    <TypeButton className="w-100">Pilih Mobil</TypeButton>
                  </Card>
                );
              })
            )}
          </Container>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default ListCar;
