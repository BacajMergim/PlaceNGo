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
    <div className="w-full h-full lg:flex justify-center items-center sm:overflow-y-hidden">
      <div className="flex justify-center items-center sm:flex-col sm:gap-5 sm:mt-4">
        <div className="lg:flex flex-col items-center gap-3">
          <img src={Logo} alt="Logo" className="pt-28" />
          <h1 className="font-semibold text-2xl">Place N'Go</h1>
          <p className="w-[35%] sm:w-[50%] font-normal text-xl leading-8 xlg:leading-5 xlg:text-base">
            Where culinary passion meets diverse flavors, blending fresh
            ingredients with creative flair to craft a unique dining experience
            for every palate.
          </p>
          <Button onClick={reservationHandler}>Make reservation</Button>
        </div>
        <div className="gap-4 lg:flex xlg:gap-1">
          <div>
            <Card style={"xlg:scale-90"} />
            <Card style="bg-opacity-25 xlg:scale-90" />
          </div>
          <Card style="bg-opacity-45 mt-24 xlg:scale-90" />
        </div>
      </div>
    </div>
  );
};

export default Home;
