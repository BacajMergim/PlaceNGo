import { useState } from "react";
import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import moment from "moment";
import Card from "../components/Card";
import ClientContactInfo from "../components/ClientContactInfo";
// import useSaveReservation from "../utils/useSaveReservation";
import { v4 as uuidv4 } from "uuid";
import { useSendConfirmation } from "../utils/useSendConfirmation";
import Successful from "../components/Successful";

const maxNumPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface FormData {
  name: String;
  email: String;
  numPeople: Number;
  date: String;
  time: String;
  id: String;
}

const BookingPage = () => {
  // const { sendReservationToFirebase } = useSaveReservation();
  const { sendConfirmation } = useSendConfirmation();
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numPeople: 0,
    date: "",
    time: "",
    id: uuidv4(),
  });

  // Handle changes to form inputs (name, email, time, etc.)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add the selected date to formData before sending
    if (selected) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: moment(selected).format("YYYY-MM-DD"),
      }));
    }

    // Send the updated formData to Firebase
    // sendReservationToFirebase({
    //   ...formData,
    //   date: moment(selected).format("DD-MM-YYYY"),
    // });
    sendConfirmation(formData);
    setShowModal(false);
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full items-center sm:ml-7">
        <h2 className="font-bold text-5xl my-5">Make a Reservation</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <div className="flex justify-center gap-4 w-full items-center md:flex-col sm:flex ">
            <div className="xl:flex xl:gap-4 xl:w-full xl:justify-around">
              <Card style="text-white !bg-opacity-75 mt-40 sm:mt-20 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <h3 className="font-bold text-2xl my-5 w-full text-center">
                  Number of guests
                </h3>
                <>
                  {maxNumPeople.map((num) => {
                    return (
                      <Button
                        key={num}
                        className={`w-3 h-3 !p-5 m-4 !border-white rounded-md !hover:bg-primary ${
                          num === formData.numPeople
                            ? "bg-primary text-black"
                            : ""
                        }`}
                        // Prevent default behavior of button click
                        onClick={(e) => {
                          e.preventDefault();
                          setFormData({
                            ...formData,
                            numPeople: num,
                          });
                        }}
                        type="button" // Set type to button to prevent form submission
                      >
                        {num}
                      </Button>
                    );
                  })}
                </>
              </Card>
              <Card style="!bg-opacity-50 flex justify-center items-center  xl:!w-[330px] xl:!h-[500px]">
                <Calendar
                  selectedDate={selected}
                  setSelectedDate={setSelected}
                />
              </Card>
            </div>
            <div className="xl:flex xl:gap-4 xl:w-full xl:justify-around">
              <Card style="!bg-opacity-25 xl:mt-40 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <ClientContactInfo data={formData} dataChange={handleChange} />
              </Card>
              <Card style="!bg-opacity-10 flex justify-center flex-wrap  xl:!w-[330px] xl:!h-[500px]">
                <div className="flex flex-col justify-between h-full">
                  <h3>Summary</h3>
                  <p>
                    Date:{" "}
                    {selected ? moment(selected).format("DD.MM.YYYY") : "N/A"}
                  </p>
                  <p>{formData.numPeople} Guests</p>
                  <p>At {formData.time}</p>
                  <p>
                    If you reserve now, you will get a confirmation by Email:{" "}
                    {formData.email}
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <Button
            className={`mt-16 mb-10 ${
              !formData.name || !formData.email || !selected || !formData.time
                ? "cursor-not-allowed"
                : ""
            }`}
            disabled={
              !formData.name || !formData.email || !selected || !formData.time
            }
            type="submit"
          >
            Reserve
          </Button>
        </form>
      </div>
      {showModal && <Successful closeModal={setShowModal} />}
    </>
  );
};

export default BookingPage;
