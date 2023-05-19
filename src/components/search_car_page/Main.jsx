import React from "react";

// import components for search car
import SearchCar from "./SearchCar";

// import components for list car
import ListCar from "./ListCar";

// import main css searchcar
import "./main.css";

// import react redux for get data
import { useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../../actions/carActions";

// image for car data
const imageArr = [
  "https://i.ibb.co/wRNQCvS/car-min1.jpg",
  "https://i.ibb.co/Jjr40zY/car-min2.jpg",
  "https://i.ibb.co/L1krtRf/car-min3.jpg",
  "https://i.ibb.co/KbtVPNB/car-min4.jpg",
  "https://i.ibb.co/6DwrHh7/car-min5.jpg",
  "https://i.ibb.co/wscFQtg/car-min6.jpg",
  "https://i.ibb.co/7Cj4HbK/car-min7.jpg",
  "https://i.ibb.co/tbRZ68V/car-min8.jpg",
];

const driverTypeArr = ["Dengan sopir", "Tanpa sopir"];

const Main = () => {
  const [carsData, setCarsData] = React.useState([]);
  const [resultCars, setResultCars] = React.useState([]);
  const [showCars, setShowCars] = React.useState(false);

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.CarsReducer);

  React.useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  React.useEffect(() => {
    if (cars) {
      setCarsData(cars);
    }
  }, [cars]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const searchCars = carsData.map((car) => {
    const newDate = new Date();
    const mutator = getRandomInt(-1000000000, 1000000000);
    const availableAt = new Date(newDate.getTime() + mutator);
    const image = imageArr[Math.floor(Math.random() * imageArr.length)];
    const driverType = driverTypeArr[Math.floor(Math.random() * driverTypeArr.length)];
    return { ...car, driverType, image, availableAt };
  });

  const handleSubmit = (e, driverType, date, time, capacity) => {
    e.preventDefault();
    const inputNewDateTime = new Date(`${date} ${time}`);
    const filteredCar = searchCars.filter((car) => car.capacity >= capacity && car.availableAt >= inputNewDateTime && car.driverType === driverType);
    setResultCars(filteredCar);
    setShowCars(true);
    console.log(resultCars);
  };

  return (
    <>
      <SearchCar handleSubmit={handleSubmit} />
      <ListCar items={resultCars} showCars={showCars} />
    </>
  );
};

export default Main;
