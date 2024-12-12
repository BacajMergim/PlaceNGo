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
    <div className="w-full h-fit lg:flex justify-center items-center py-10 mr-8">
      <div className="flex justify-center items-center sm:flex-col sm:gap-5 sm:mt-4">
        <div className="lg:flex flex-col sm:flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-[40%] w-[40%]" />
          <h1 className="font-semibold text-2xl">TischZeit</h1>
          <p className="w-[35%] sm:w-[90%] text-center sm:pl-4 font-normal text-xl leading-8 xlg:leading-5 xlg:text-base">
            Wo kulinarische Leidenschaft auf vielfältige Aromen trifft, werden
            frische Zutaten mit kreativer Finesse vereint, um ein einzigartiges
            Genusserlebnis für jeden Gaumen zu schaffen.
          </p>
          <Button onClick={reservationHandler}>Reservierung machen</Button>
        </div>
        <div className="gap-4 lg:flex lg:gap-1 sm:hidden sm:h-0">
          <div>
            <Card style={"lg:scale-[0.9] !mb-0"} />
            <Card style="bg-opacity-25 lg:scale-[0.9]" />
          </div>
          <Card style="bg-opacity-45 mt-24 lg:scale-[0.9]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
