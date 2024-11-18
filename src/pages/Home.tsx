import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  const navigate = useNavigate();

  const reservationHandler = () => {
    navigate("/Booking");
  };
  return (
    <div className="w-full h-full flex justify-center items-center sm:overflow-y-hidden">
      <div className="flex justify-center items-center sm:flex-col sm:gap-5 sm:mt-4 md:overflow-hidden">
        <div className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Logo" className="pt-28" />
          <h1 className="font-semibold text-2xl">Place N'Go</h1>
          <p className="w-[35%] sm:w-[50%] font-normal text-xl leading-8 md:leading-5 md:text-lg">
            Where culinary passion meets diverse flavors, blending fresh
            ingredients with creative flair to craft a unique dining experience
            for every palate.
          </p>
          <Button onClick={reservationHandler}>Make reservation</Button>
        </div>
        <div className="flex gap-4 md:flex-col">
          <div>
            <Card />
            <Card style="bg-opacity-25" />
          </div>
          <Card style="bg-opacity-45 mt-24" />
        </div>
      </div>
    </div>
  );
};

export default Home;
