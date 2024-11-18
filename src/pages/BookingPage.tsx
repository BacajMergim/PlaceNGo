import { useState } from "react";
import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import moment from "moment";
import Card from "../components/Card";
import ClientContactInfo from "../components/ClientContactInfo";

const maxNumPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BookingPage = () => {
  const [selected, setSelected] = useState<Date>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numPeople: 0,
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
  };
  return (
    <div className="flex flex-col h-full w-full items-center ">
      <h2 className="font-bold text-5xl my-5">Make a Reservation</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="flex justify-between gap-4 w-full items-center md:flex-col sm:flex ">
          <Card style="text-white flex justify-center flex-wrap !bg-opacity-75 mt-40">
            <h3 className="font-bold text-2xl my-5"> Number of guests</h3>

            {maxNumPeople.map((num) => {
              return (
                <Button
                  key={num}
                  className={`w-3 h-3 !p-5 m-4 !border-white rounded-md !hover:bg-primary ${
                    num === formData.numPeople ? "bg-primary text-black" : ""
                  }`}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      numPeople: num,
                    });
                  }}
                >
                  {num}
                </Button>
              );
            })}
          </Card>
          <Card style="!bg-opacity-50 flex flex-col justify-center content-center">
            <Calendar selectedDate={selected} setSelectedDate={setSelected} />
          </Card>
          <Card style="!bg-opacity-25 mt-40">
            <ClientContactInfo data={formData} dataChange={handleChange} />
          </Card>
          <Card style="!bg-opacity-10">
            <div className="flex flex-col justify-between  h-full">
              <h3>Summary</h3>
              <p>Date: {moment(formData.date).format("DD.MM.YYYY")}</p>
              <p>{formData.numPeople} Guests</p>
              <p>At {formData.time}</p>
              <p>If you reserve now you wil get an confirmation per Email</p>
            </div>
          </Card>{" "}
        </div>
        <Button
          className="mt-16"
          disabled={!formData.name || !formData.email}
          type="submit"
        >
          Reserve
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;
